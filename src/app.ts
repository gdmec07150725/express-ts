import express, { Express } from "express";
import init from "./loaders";

/// 启动服务
async function startServer() {
  const app: Express = express();

  await init({ expressApp: app });
  app.listen(3000, () => {
    console.log(`Your server is ready !`);
  })
}

startServer();