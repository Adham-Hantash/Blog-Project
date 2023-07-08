import { Router } from "express";
import * as authController from "./controller/auth.controller.js";
const router = Router();

router.post('/signup', authController.signup);
router.post('/signin', authController.signin);

export default router