import User from "../models/user.model.js";
import bcryptjs from "bcryptjs"

export const signup = async (req, res, next) => {
  const { firstName, lastName, email, password } = req.body;

  if (!firstName || !lastName || !email || !password || firstName === "" || lastName === "" || email === "" || password === "") {
    res.status(400).json({ message: "All fields are required" });
  }

  if (password.length < 8) {
    res.status(403).json({message: "Passworrd must be at least 8 characters long"});
    return;
  }

  const hashedPassword = bcryptjs.hashSync(password, 12);

  const newUser = new User({ firstName, lastName, email, password: hashedPassword });

  try {
    await newUser.save();
    res.json("Signup Successful");
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}
