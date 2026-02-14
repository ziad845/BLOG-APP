import { connectDB, sequelize } from "./DB/connection.js";
import "./DB/Models/user.model.js";
import authRouter from "./Modules/Auth/auth.routes.js";
// import blogRouter from "./Modules/Blog/blog.routes.js";
// import userRouter from "./Modules/User/user.routes.js";

const bootstarp = async (app, express) => {
  app.use(express.json());

  await connectDB();
  await sequelize.sync({ alter: true });

  app.use("/auth", authRouter);
  // app.use("/blog", blogRouter);
  // app.use("/user", userRouter);

  app.use((req, res) => {
    res.status(404).json({
      message: "Handler not found !!!",
    });
  });
};

export default bootstarp;
