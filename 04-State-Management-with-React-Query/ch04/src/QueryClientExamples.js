import axios from 'axios'
import { gql, GraphQLClient } from 'graphql-request'

const customQuery = gql`
  query {
    posts {
      data {
        id
        title
      }
    }
  }
`
export const fetchGQL = async ({ signal }) => {
  const endpoint = 'https://graphqlzero.almansi.me/api'
  const client = new GraphQLClient(endpoint)
  const {
    posts: { data },
  } = await client.request({ document: customQuery, signal })
  return data
}

export const fetchData = async ({ queryKey, signal }) => {
  const { username } = queryKey[0]
  const { data } = await axios.get(`https://danieljcafonso.builtwithdark.com/react-query-api/${username}`, { signal })
  return data
}

export const fetchDataWithFetch = async ({ queryKey, signal }) => {
  const { username } = queryKey[0]
  const response = await fetch(`https://danieljcafonso.builtwithdark.com/react-query-api/${username}`, { signal })
  if (!response.ok) throw new Error('Something failed in your request')
  return response.json()
}
