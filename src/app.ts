import express from "express";

const app = express();
const port = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.json({ message: "Hello from starter-expressjs-prisma-ts" });
});

app.listen(port, () => {
  console.log(`Listening to requests on port ${port}`);
});
