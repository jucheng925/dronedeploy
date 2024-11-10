from sqlalchemy_serializer import SerializerMixin

from config import db

class Image(db.Model, SerializerMixin):
    __tablename__ = "images"
    id = db.Column(db.Integer, primary_key=True)
    timestamp = db.Column(db.String)
    latitude = db.Column(db.String)
    longitude = db.Column(db.String)
    altitude_m = db.Column(db.Integer)
    heading_deg = db.Column(db.Integer)
    file_name = db.Column(db.String)
    camera_tilt_deg = db.Column(db.Integer)
    focal_length_mm = db.Column(db.Integer)
    iso = db.Column(db.Integer)
    shutter_speed = db.Column(db.String)
    aperture = db.Column(db.String)
    color_temp_k = db.Column(db.Integer)
    image_format = db.Column(db.String)
    file_size_mb = db.Column(db.Integer)
    drone_speed_mps = db.Column(db.Integer)
    battery_level_pct = db.Column(db.Integer)
    gps_accuracy_m = db.Column(db.Integer)
    gimbal_mode = db.Column(db.String)
    subject_detection = db.Column(db.String)
    image_tags = db.Column(db.String)
    # image-tags are array
    
