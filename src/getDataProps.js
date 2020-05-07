export const getDataProps = (utils, props) => {
  return utils.client.products
    .search({ query: "" })
    .then((data) => data)
    .catch((e) => console.log(e))
  // Note: A pageSize property can be added to limit the search results
  // For example: .search({ query: "", pageSize: 100 })
}
