import express from "express";
import { posts } from "../data/mockData.js";

import { authMiddleware } from "../middleware/auth.middleware.js";
const postRouter = express.Router();

postRouter.get("/", authMiddleware, (req, res) => {
    res.json({
      data: posts
    })
    })
export default postRouter;
