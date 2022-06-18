import express, { Router } from "express";

import {container} from "tsyringe";
import  UserController from "../controller/user.controller"
import { UserDto } from "../transfer-objects/user.dto";
import { validation } from "../middleware/validation";
const userController: any = container.resolve(UserController)

const UserRouter : Router = express.Router();

UserRouter.post('/register', validation(UserDto), userController.createUser);
UserRouter.get('/all-users', validation(UserDto), userController.getUsers);
UserRouter.post('/login', validation(UserDto), userController.login);

export default UserRouter;