module.exports = {
  presets: ['module:metro-react-native-babel-preset'], // Default preset for React Native

  plugins: [
    'nativewind/babel', // Plugin for NativeWind
    [
      'module:react-native-dotenv',
      {
        envName: 'APP_ENV',
        moduleName: '@env',
        path: '.env',
        safe: false,
        allowUndefined: true,
        verbose: false,
      },
    ],
  ],
};
