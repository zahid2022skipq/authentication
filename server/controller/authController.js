import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import User from "../model/User";

export const singUp = async (req, res) => {
  const { name, email, password } = req.body;
  const userExists = await User.findById({ email });

  if (userExists) {
    return res.json({ message: "User already exists" });
  }

  const hashedPassword = bcrypt.hashSync(password, 12);

  try {
  } catch (error) {}
};
