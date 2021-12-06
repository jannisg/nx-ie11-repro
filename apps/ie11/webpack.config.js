const applyNrwlReactWebpackConfig = require("@nrwl/react/plugins/webpack")

module.exports = function(config) {
  // applying @nrwl/react webpack config (mutates config)
  applyNrwlReactWebpackConfig(config);

  // OPTION 1:
  // Explicitly setting target to produce IE11 compatible ES5 code:
  config.target = [
    'web',
    'es5',
  ];

  // OPTION 2:
  // Deleting target will trigger Webpack 5 defaults of "browserslist"
  delete config.target;

  // OPTION 3:
  // Explicitly setting to honour .browserslistrc entries:
  config.target = "browserslist";

  return config;
};
