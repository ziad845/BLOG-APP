import { Router } from "express";
import { getAllUsers } from "./user.controller.js";
import { authMiddleware } from "../../Middlewares/auth.middleware.js";

const router = Router();

router.get("/", authMiddleware, getAllUsers);

export default router;
