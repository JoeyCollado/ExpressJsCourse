import express from "express";
import { userLogin, userSignup } from "./controller.js";

const router = express.Router(); //initialize router variable

//routes
router.get('/login', userLogin) //router with endpoint
router.get('/signup', userSignup)
//adding a middleware in this route is considered router-level-middleware, will only apply in this route group

export default router

