from flask import Flask, request, jsonify
from flask_cors import CORS
from nudenet import NudeClassifier

app = Flask(__name__)
CORS(app)  # allows cross-origin requests from the extension

# Load the NudeNet model
classifier = NudeClassifier()

@app.route('/classify', methods=['POST'])
def classify_image():
    file = request.files['file']
    result = classifier.classify(file)
    
    # result looks like {'image.jpg': {'unsafe': 0.99}} or {'image.jpg': {'safe': 0.01}}
    label = list(result.values())[0]
    nsfw_score = label.get('unsafe', 0)
    
    # You can adjust the threshold here (e.g. 0.8 means >80% chance it's NSFW)
    is_nsfw = nsfw_score > 0.8
    
    return jsonify({'nsfw': is_nsfw})

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)

