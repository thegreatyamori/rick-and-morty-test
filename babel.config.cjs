module.exports = {
  env: {
    test: {
      presets: [
        ["@babel/preset-env", { "modules": "commonjs" }],
        ["@babel/preset-react", { "runtime": "automatic" }]
      ],
    },
  },
};
