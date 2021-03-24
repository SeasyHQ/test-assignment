import "./env";

import Koa from "koa";
// import cors from "@koa/cors";

import { port } from "./config";

import root from "./root";

const app = new Koa();

app.proxy = true;

root.applyMiddleware({
  app,
});

app.on("error", (err, ctx) => {
  console.error(err);
});

app.listen({ port }, () => {
  console.log("Running at", `http://localhost:${port}/graphql`);
});
