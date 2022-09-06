const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({

  name: 'mfe1',

  // exposes: {
  //   './Component': './src/app/app.component.ts',
  // },
  exposes: {
    './Module': './src/app/micro-frontend-1/micro-frontend-1.module.ts',
    './Component': './src/app/micro-frontend-1/mf1-root/mf1-root.component.ts',
  },


  shared: {
    ...shareAll({ singleton: true, eager: true, strictVersion: true, requiredVersion: 'auto' }),
  },

});
