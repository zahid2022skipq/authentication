import express from "express";

import { signUp } from "../controller/authController";

const router = express.Router();

router.post("/signUp");

export default router;
