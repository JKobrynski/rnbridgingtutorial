module.exports = {
  presets: [ 'module:metro-react-native-babel-preset' ],
  plugins: [
    [
      'module-resolver',
      {
        root: [ './' ],
        extensions: [
          '.ios.js',
          '.ios.ts',
          '.ios.tsx',
          '.android.js',
          '.android.ts',
          '.android.tsx',
          '.js',
          '.ts',
          '.tsx',
          '.json',
        ],
        alias: {
          'app-info-package': './app-info-package',
          'app-info-package-classic': './app-info-package-classic',
          'conic-gradient-package': './conic-gradient-package',
          'conic-gradient-package-classic': './conic-gradient-package-classic',
          'range-datepicker-package': './range-datepicker-package',
          'range-datepicker-package-classic': './range-datepicker-package-classic',
          'sample-event-module': './sample-event-module',
          'sample-event-module-classic': './sample-event-module-classic',
          'sample-native-slider': './sample-native-slider',
          'sample-native-slider-classic': './sample-native-slider-classic',
          'sample-native-screen': './sample-native-screen',
          'sample-native-screen-classic': './sample-native-screen-classic',
          'sample-native-list': './sample-native-list',
          'sample-native-list-classic': './sample-native-list-classic',
        },
      },
    ],
    [
      '@babel/plugin-transform-react-jsx',
      {
        runtime: 'automatic',
      },
    ],
  ],
};
