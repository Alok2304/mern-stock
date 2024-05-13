import User from "../models/user.model.js";
import bcryptjs from "bcryptjs"
import { errorHandler } from "../utils/error.js";
import jwt from "jsonwebtoken";

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

export const signin = async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password || email === '' || password === '') {
    next(errorHandler(400, "All fields are required!"));
  }

  try {
    const validUser = await User.findOne({ email });

    if (!validUser) {
      return next(errorHandler(404, "Wrong credentials"));
    }

    const validPassword = bcryptjs.compareSync(password, validUser.password);

    if (!validPassword) {
      return next(errorHandler(400, "Wrong credentials!"));
    }
    
    const token = jwt.sign({ id: validUser._id }, process.env.JWT_SECRET_KEY);
    const { password: pass, ...rest } = validUser._doc;
    res.status(200).cookie("access_token", token, { httpOnly: true }).json(rest);
  }
  catch (error) {
    next(error);
  }
};
