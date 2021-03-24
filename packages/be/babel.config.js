/* eslint-disable fp/no-mutation */
module.exports = (api) => {
  // const isProduction = api.cache(
  //   () => process.env.NODE_ENV === "production" || process.env.BABEL_ENV === "production",
  // );

  // console.log("babel.config.js", { isProduction });

  api.cache(false);

  return {
    presets: ["@babel/typescript", ["@babel/env", { targets: { node: "14" } }]],
    plugins: [
      "@babel/transform-runtime",
      // ...(isProduction ? ["transform-remove-console", "transform-remove-debugger"] : []),
    ].filter(Boolean),
  };
};
