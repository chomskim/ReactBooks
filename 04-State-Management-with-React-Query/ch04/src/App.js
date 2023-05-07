import { useQuery, useQueryClient } from '@tanstack/react-query'
import axios from 'axios'

import { fetchGQL } from './QueryClientExamples'

const fetchData = async ({ queryKey }) => {
  const { apiName } = queryKey[0]
  const { data } = await axios.get(`https://danieljcafonso.builtwithdark.com/${apiName}`)
  return data
}

const apiA = 'react-query-api'
const apiB = 'react-query-api-two'

const ComponentA = () => {
  const { data, error, isLoading, isError, isFetching } = useQuery({
    queryKey: [{ queryIdentifier: 'api', apiName: apiA }],
    queryFn: fetchData,
    retry: 1,
  })

  if (isLoading) return <div> Loading data... </div>

  if (isError) return <div> Something went wrong... Here is the error: {error.message}</div>

  return (
    <div>
      <p>{isFetching ? 'Fetching Component A...' : data.hello} </p>
      <ComponentB />
      <ComponentGQL />
    </div>
  )
}

const ComponentB = () => {
  const { data } = useQuery({
    queryKey: [{ queryIdentifier: 'api', apiName: apiB }],
    queryFn: fetchData,
    onSuccess: (data) => console.log('Component B fetched data', data),
  })
  return (
    <div>
      <span>{data?.hello}</span>
      <ComponentC parentData={data} />
    </div>
  )
}

const ComponentC = ({ parentData }) => {
  const { data, isFetching } = useQuery({
    queryKey: [{ queryIdentifier: 'api', apiName: apiA }],
    queryFn: fetchData,
    enabled: parentData !== undefined,
  })
  const queryClient = useQueryClient()

  return (
    <div>
      <p>{isFetching ? 'Fetching Component C...' : data.hello} </p>
      <button
        onClick={() =>
          queryClient.refetchQueries({
            queryKey: [{ queryIdentifier: 'api', apiName: apiA }],
          })
        }
      >
        Refetch Parent Data
      </button>
    </div>
  )
}
const ComponentGQL = () => {
  const { data } = useQuery({
    queryKey: ['posts'],
    queryFn: fetchGQL,
    onSuccess: (data) => console.log('On Success Component GQL fetched data', data),
  })
  //console.log('Component GQL fetched data', data)
  return (
    <div>
      Component GQL
      {data.slice(0, 5).map(({ id, title }) => {
        return <div id={id}>{title}</div>
      })}
    </div>
  )
}

export default ComponentA
