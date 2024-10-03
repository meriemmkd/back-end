import mongoose from "mongoose";

const CourseSchema = new mongoose.Schema({
  CourseTitle: {
    type: String,
    required: true,
  },
  CourseCode: {
    type: String,
  },
  Rating: {
    type: Number,
    default: 0,
  },
  Price: {
    type: String,
  },
  PDF: {
    type: String, 
    required: true,
  },
});

const Course = mongoose.model("Course", CourseSchema);

export default Course;
