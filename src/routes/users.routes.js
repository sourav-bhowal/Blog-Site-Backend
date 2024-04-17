import { Router } from "express";
import {upload} from "../middlewares/multer.middlewares.js";
import { verifyJWT } from "../middlewares/auth.middlewares.js";
import { getAllUsers, login, logout, signin, verifyUser } from "../controllers/users.controllers.js";



const userRouter = Router();

userRouter.route("/verifyUser").post(verifyUser);
userRouter.route("/signin").post(upload.single("profilePic"), signin);
userRouter.route("/login").post(login);
userRouter.route("/logout").post(logout);
userRouter.route("/all-users").get(getAllUsers);



export default userRouter;