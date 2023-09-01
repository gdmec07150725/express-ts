import express, { Express, Request, Response } from "express";

const app: Express = express();

app.get("/", (req: Request, res: Response) => {
  res.send("Express + Typescript Server");
});

app.listen(3000, () => {
  console.log("running at http://localhost:3000");
});
