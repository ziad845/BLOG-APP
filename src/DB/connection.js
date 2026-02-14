// import { Sequelize } from "sequelize";

// export const sequelize = new Sequelize("blog_app", "root", "", {
//   host: "localhost",
//   dialect: "mysql",
//   logging: true,
// });

// export const connectDB = async () => {
//   try {
//     await sequelize.authenticate();
//     console.log("Database Connected Successfully (LOCAL)");
//   } catch (error) {
//     console.error("Database connection error:", error);
//   }
// };


import { Sequelize } from "sequelize";

export const sequelize = new Sequelize(
  process.env.MYSQL_URL || "mysql://root:@localhost:3306/blog_app",
  {
    dialect: "mysql",
    logging: false,
  }
);

export const connectDB = async () => {
  try {
    await sequelize.authenticate();
    console.log("Database Connected Successfully");
  } catch (error) {
    console.error("Database connection error:", error);
  }
};
