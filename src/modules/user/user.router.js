import { Router } from "express";
import * as userController from "./contreoller/user.controller.js";
const router = Router();

router.get('/',userController.getUser);
router.patch('/:id',userController.updateUser);
router.delete('/:id',userController.deleteUser);

export default router;