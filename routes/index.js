import express from "express";
import authRouter from "./auth.route.js";
import postRouter from "./post.route.js";
import 'dotenv/config';
const router = express.Router();
router.use("/auth", authRouter);
router.use("/posts", postRouter)
export default router;
