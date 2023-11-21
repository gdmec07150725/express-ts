import { Application, Request, Response } from "express";
import * as bodyParser from "body-parser";
import UserService from "../services/user";

export default async ({ app }: { app: Application }) => {
    
  app.post("/login", async (req: Request, res: Response) => {
    const loginBody = req.body;
    console.log("loginBody", loginBody);
    // 调用Service层
    //关于如何访问数据层和业务逻辑层的抽象
    const user = await UserService.login(loginBody);
    return res.json({ user: user });
  });

  app.use(bodyParser.urlencoded({ extended: false }));
  return app;
};
