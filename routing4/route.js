import express from "express";
import { userLogin, userSignup } from "./controller.js";

const router = express.Router(); //initialize router variable

//routes
router.get('/login', userLogin) //router with endpoint
router.get('/signup', userSignup)

export default router