import { Router } from "express";
import { createBlog } from "./blog.controller.js";

const router = Router();

router.post("/", createBlog);

export default router;
