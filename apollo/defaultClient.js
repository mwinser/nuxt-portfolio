export default ({ $config }) => {
  return {
    httpEndpoint: $config.GRAPHQL_ENDPOINT,
    httpLinkOptions: {
      credentials: 'same-origin',
    },
  }
}
