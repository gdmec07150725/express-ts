import express, { Express } from "express";
import bodyParser from "body-parser";
import fs from "fs";
import morgan from "morgan";
import path from "path";
import init from "./loaders";

/// 启动服务
async function startServer() {
  const app: Express = express();

  const accessLogStream = fs.createWriteStream(
    path.join(__dirname, "access.log"),
    { flags: "a" }
  );
  // console request log
  app.use(morgan("combined", { stream: accessLogStream }));
  app.use(bodyParser.urlencoded({ extended: false }));

  // parse application/json
  app.use(bodyParser.json());

  await init({ expressApp: app });

  app.listen(3000, () => {
    console.log(`Your server is ready !`);
  });
}

startServer();
