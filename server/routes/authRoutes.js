import express from "express";

import { signUp } from "../controller/authController";

const router = express.Router();

router.post("/signup", signUp);

export default router;
