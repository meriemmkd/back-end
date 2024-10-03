import express from "express";
import {
  getCourses,
  getCourseById,
  createCourse,
  updateCourseById,
  deleteAllCourses,
  deleteCourseById,
} from "../controllers/course.js";
import isAdmin from "../middlewares/isAdmin.js";

const courseRouter = express.Router();
export default courseRouter;


courseRouter.get("/", getCourses);            // Get all courses
courseRouter.get("/:id", getCourseById);      // Get a specific course by ID

courseRouter.post("/", isAdmin, createCourse);         // Create a new course

courseRouter.put("/:id",isAdmin, updateCourseById);   // Update a course by ID

courseRouter.delete("/", isAdmin,deleteAllCourses);   // Delete all courses
courseRouter.delete("/:id", isAdmin,deleteCourseById); // Delete a specific course by ID
