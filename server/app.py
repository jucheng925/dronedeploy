from flask import make_response, request
from config import app, db, api
from models.image import Image


@app.route('/api/images')
def images():
  images = Image.query.all()
  images_dict = [image.to_dict() for image in images]
  response = make_response(images_dict, 200)
  return response

@app.route('/api/ask', methods= ['POST'])
def ask():
  if request.method == 'POST':
    data = request.get_json()
    image_id = data.get("imageInQuestion")
    request_prop = data.get("requestInfo")
    image = Image.query.filter(Image.id == image_id).first()

    print(image_id)
    print(request_prop)
    print(image)

    response = make_response({"answer": "answer"}, 200)
    return response


if __name__ == "__main__":
  app.run(port=5555, debug=True)
