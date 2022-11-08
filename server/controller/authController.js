import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import User from "../model/User";

export const signUp = async (req, res) => {
  const { name, email, password } = req.body;
  console.log("Sign Up Controller");
  try {
    const userExists = await User.findOne({ email });

    if (userExists) {
      return res.json({ message: "User already exists" });
    }

    const hashedPassword = bcrypt.hashSync(password, 12);

    const result = await new User({
      name: name,
      email: email,
      password: hashedPassword,
    });
    await result.save();

    const token = jwt.sign({ email: result.email, id: result._id }, "secret", {
      expiresIn: "1hr",
    });

    return res.status(200).json({ result, token });
  } catch (error) {
    console.log("Error Auth Controller ==> ", error);
  }
};
