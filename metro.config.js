const {getDefaultConfig} = require('metro-config') // eslint-disable-line import/no-extraneous-dependencies

module.exports = (async () => {
  const {
    resolver: {sourceExts, assetExts},
  } = await getDefaultConfig()

  return {
    // We need to explicitly tell metro/haste/watchman to register the root directory
    // otherwise imports fail when running minis directly.
    // https://github.com/facebook/react-native/issues/24432#issuecomment-482798850
    watchFolders: [__dirname],
    server: {
      port: parseInt(process.env.RCT_METRO_PORT, 10) || 8082,
    },
    transformer: {
      // eslint-disable-next-line require-await
      getTransformOptions: async () => ({
        transform: {
          experimentalImportSupport: false,
          inlineRequires: true,
        },
      }),
      babelTransformerPath: require.resolve('react-native-svg-transformer'),
    },
    resolver: {
      assetExts: assetExts.filter(ext => ext !== 'svg'),
      sourceExts: [...sourceExts, 'svg'],
    },
  }
})()
