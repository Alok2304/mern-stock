import User from "../models/user.model.js";
import bcryptjs from "bcryptjs"
import { errorHandler } from "../utils/error.js";

export const signup = async (req, res, next) => {
  const { firstName, lastName, email, password } = req.body;

  if (!firstName || !lastName || !email || !password || firstName === "" || lastName === "" || email === "" || password === "") {
    return next(errorHandler(400, "Alll fields are required"));
  }

  if (password.length < 8) {
    return next(errorHandler(403, "Password must be at least 8 characters long"));
  }

  const hashedPassword = bcryptjs.hashSync(password, 12);

  const newUser = new User({ firstName, lastName, email, password: hashedPassword });

  try {
    await newUser.save();
    res.json("Signup Successful");
  } catch (error) {
    next(error);
  }
}
