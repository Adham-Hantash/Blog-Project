import { Router } from "express";
import * as blogController from './controller/blog.controller.js'
const router = Router();

router.post('/addBlog',blogController.addBlog);
router.get('/getBlog',blogController.getBlog);

export default router;