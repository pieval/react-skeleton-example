/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}]*/
const cssnext = require('postcss-cssnext');
const reactToolboxVariables = require('./src/toolbox_theme');

module.exports = {
  plugins: [
    cssnext({
      features: {
        customProperties: {
          variables: reactToolboxVariables,
        },
      },
    }),
  ],
};
