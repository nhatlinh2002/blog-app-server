import express from "express";
import { getPosts, updatePost } from "../controller/posts.js";
import { createPost } from "../controller/posts.js";

const router = express.Router();

router.get('/', getPosts);

router.post('/', createPost);
router.post('/create', updatePost);

export default router;