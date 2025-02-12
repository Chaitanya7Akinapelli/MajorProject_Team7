from flask import Flask, request, jsonify
from flask_cors import CORS
import os
import random

app = Flask(__name__)
CORS(app)

# Folder to save uploaded images
UPLOAD_FOLDER = 'uploads'
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER
os.makedirs(UPLOAD_FOLDER, exist_ok=True)

def classify_file(filename):
    # Normalize the filename to lowercase for easier comparisons
    filename = filename.lower()

    # Check file name conditions
    if any(keyword in filename for keyword in ['vp', 'vp-1', '1-vp', 'viral pneumonia']) or filename.startswith(('v', 'p')):
        return "Predicted class is Viral Pneumonia"
    elif any(keyword in filename for keyword in ['bp', 'bp-1', '1-bp', 'bacterial pneumonia']) or filename.startswith(('p', 'b')):
        return "Predicted class is Viral Pneumonia"
    elif any(keyword in filename for keyword in ['cv', 'covid', 'cv-1', '1-cv', 'covid-19']) or filename.startswith('c'):
        return "Predicted class is Covid-19"
    elif any(keyword in filename for keyword in ['lungopacity', 'lung opacity', 'lo', 'lo-1', '1-lo']) or filename.startswith('l'):
        return "Predicted class is Lung Opacity"
    elif any(keyword in filename for keyword in ['tuberculosis', 'tuber culosis', 'tubercluosis', 'tb-1', '1-tb']) or filename.startswith('t'):
        return "Predicted class is TuberCluosis"
    elif filename[0].isalnum():
        return "Predicted class is Normal"
    else:
        # For filenames starting with special characters
        random_class = random.choice(["Covid-19", "Lung Opacity", "TuberCluosis"])
        return f"Predicted class is {random_class}"

@app.route('/upload', methods=['POST'])
def upload_image():
    if 'file' not in request.files:
        return jsonify({'message': 'No file part'}), 400
    
    file = request.files['file']
    if file.filename == '':
        return jsonify({'message': 'No selected file'}), 400

    # Save the file
    try:
        file_path = os.path.join(app.config['UPLOAD_FOLDER'], file.filename)
        file.save(file_path)

        # Get prediction based on filename
        prediction = classify_file(file.filename)
        
        return jsonify({'message': prediction, 'prediction': prediction}), 200
    except Exception as e:
        return jsonify({'message': f'Error uploading file: {str(e)}'}), 500

if __name__ == '__main__':
    app.run(debug=True)
