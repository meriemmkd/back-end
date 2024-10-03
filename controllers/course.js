import Course from "../models/Course.js";
let courses= [];

export async function getCourses(req, res) {
  try {
    const courses = await Course.find();
    res.send(courses);
  } catch (error) {
    res.send({
      message: "Error fetching courses",
    });
  }
}

export async function getCourseById(req, res) {
 
    const course = await Course.findById(req.params.id);
    if (course) {
      res.send(course);
    } else {
      res.status(404).send({
        message: "Course not found",
      });
    }

}

export async function createCourse(req, res) {
  try {
    const courseCreation = await Course.create(req.body);
    res.send({
      message: "Course created successfully",
      Course: courseCreation,
    });
  } catch (error) {
    res.send({
      message: "Error while creating the Course",
    });
  }
}

export async function updateCourseById(req, res) {
  try {
    const updateCourse = await Course.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (updateCourse) {
      res.send({
        message: "Course updated successfully",
        Course: updateCourse,
      });
    } else {
      res.send({
        message: "Course doesn't exist",
      });
    }
  } catch (error) {
    res.send({
      message: "Error updating course",
    });
  }
}

export async function deleteCourseById(req, res) {
  try {
    const deleteCourse = await Course.findByIdAndDelete(req.params.id);
    if (deleteCourse) {
      res.send({
        message: "Course deleted successfully",
        Course: deleteCourse,
      });
    } else {
      res.send({
        message: "Course doesn't exist",
      });
    }
  } catch (error) {
    res.send({
      message: "Error deleting course",
    });
  }
}

export async function deleteAllCourses(req, res) {
  try {
    await Course.deleteMany();
    res.send({
      message: "All courses deleted successfully",
    });
  } catch (error) {
    res.send({
      message: "Error deleting courses",
    });
  }
}
