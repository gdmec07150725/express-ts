import express from "express";
const app = express();
app.get("/", (req, res) => {
    res.send("Express + Typescript Server");
});
app.listen(3000, () => {
    console.log("running at http://localhost:3000");
});
