import Knex from "knex";
// @ts-expect-error
import knexStringcase from "knex-stringcase";
// https://github.com/knex/knex/issues/3071#issuecomment-467765871

import { db } from "../config";

const kxConfig = {
  client: "sqlite",
  searchPath: ["main"],
  connection: {
    filename: db
  },
  useNullAsDefault: true,
  asyncStackTraces: true
};

const kx = Knex(knexStringcase(kxConfig));

// kx.on("query-response", (res) => {
//   // if (res && res[0] && res[0].dateTo) {
//   //   console.log(res.length);
//   // }
//   console.log(res);
// });

export default kx;
