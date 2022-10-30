module.exports = function (api) {
  api.cache(true)
  return {
    presets: ["babel-preset-expo"],
    // presets: ["react-native", "react-native-dotenv"],
    plugins: [
      [
        "module:react-native-dotenv",
        // {
        //   moduleName: "@env",
        //   path: ".env",
        //   safe: true,
        //   allowUndefined: true,
        // },
      ],
    ],
  }
}
