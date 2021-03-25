// const typescript = require("relay-compiler-language-typescript");

// Also check codegen.yml
module.exports = {
  // Configuration options accepted by the `relay-compiler` command-line tool and `babel-plugin-relay`.
  src: "./src",
  schema: "./schema.graphql",
  language: "node_modules/relay-compiler-language-typescript", // wtf lerna??
  extensions: ["ts", "tsx"],
  artifactDirectory: "./src/__generated__",
  // watch: false,
  // validate: true,
  // customScalars: {
  //   Money: "String",
  //   DateTime: "String",
  //   Date: "String",
  //   Time24H: "String",
  // },
};
