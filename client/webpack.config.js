resolve: {
    fallback: {
      crypto: require.resolve('crypto-browserify')
      stream: require.resolve('stream-browserify')
      // Add other polyfills as needed
    }
}
  