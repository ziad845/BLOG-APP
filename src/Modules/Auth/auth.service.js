import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { UserModel } from "../../DB/Models/user.model.js";

/* ================= REGISTER ================= */

export const registerService = async (data) => {
  const { name, email, phone, password, rePassword } = data;

  if (!name || !email || !phone || !password || !rePassword) {
    throw new Error("All fields are required");
  }

  if (password !== rePassword) {
    throw new Error("Passwords do not match");
  }

  const existingEmail = await UserModel.findOne({ where: { email } });
  if (existingEmail) {
    throw new Error("Email already exists");
  }

  const existingPhone = await UserModel.findOne({ where: { phone } });
  if (existingPhone) {
    throw new Error("Phone already exists");
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const user = await UserModel.create({
    name,
    email,
    phone,
    password: hashedPassword,
  });

  return {
    id: user.id,
    name: user.name,
    email: user.email,
    phone: user.phone,
  };
};

/* ================= LOGIN ================= */

export const loginService = async (data) => {
  const { email, password } = data;

  if (!email || !password) {
    throw new Error("Email and password are required");
  }

  const user = await UserModel.findOne({
    where: { email },
  });

  if (!user) {
    throw new Error("Invalid email or password");
  }

  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch) {
    throw new Error("Invalid email or password");
  }

  const token = jwt.sign(
    {
      id: user.id,
      email: user.email,
    },
    process.env.JWT_SECRET,
    {
      expiresIn: "1d",
    }
  );

  return {
    token,
    user: {
      id: user.id,
      name: user.name,
      email: user.email,
      phone: user.phone,
    },
  };
};
