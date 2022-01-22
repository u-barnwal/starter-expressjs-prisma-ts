import express, { Application, Request, Response, NextFunction } from "express";

const app: Application = express();
const port = process.env.PORT || 5000;

app.get("/", (req: Request, res: Response, next: NextFunction) => {
  res.json({ message: "Hello from starter-expressjs-prisma-ts" });
});

app.listen(port, () => {
  console.log(`Listening to requests on port ${port}`);
});
