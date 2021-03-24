import "./env";

import Koa from "koa";
// import cors from "@koa/cors";

import { db, nodeEnv, port } from "./config";

const app = new Koa();

app.proxy = true;

app.on("error", (err, ctx) => {
  console.error(err);
});

app.listen({ port }, () => {
  console.log("Running at", `http://localhost:${port}/graphql`);
});
