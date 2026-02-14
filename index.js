// import dotenv from "dotenv";
// dotenv.config();





// import express from "express";
// import bootstarp from "./src/appcontroller.js";

// const app = express();
// const port = 3000;

// const startServer = async () => {
//   await bootstarp(app, express);

//   app.listen(port, () =>
//     console.log(`Server running on http://localhost:${port}`)
//   );
// };

// startServer();


import dotenv from "dotenv";
dotenv.config();

import express from "express";
import bootstarp from "./src/appcontroller.js";

const app = express();
const PORT = process.env.PORT || 3000;

const startServer = async () => {
  await bootstarp(app, express);

  app.listen(PORT, () =>
    console.log(`Server running on port ${PORT}`)
  );
};

startServer();
