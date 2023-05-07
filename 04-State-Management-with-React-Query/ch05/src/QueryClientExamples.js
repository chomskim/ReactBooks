import axios from 'axios'
import { useQuery, useQueryClient } from '@tanstack/react-query'
import { useState } from 'react'

const fetchData = async ({ queryKey, signal }) => {
  const { username } = queryKey[0]
  const { data } = await axios.get(`https://danieljcafonso.builtwithdark.com/react-query-api/${username}`, { signal })
  return data
}

const PrefetchedDataComponent = () => {
  const { data, isFetched } = useQuery({
    queryKey: [{ queryIdentifier: 'api', username: 'userOne' }],
    queryFn: fetchData,
    staleTime: 60000,
  })

  console.log(data, isFetched)
  return <div>{data?.hello}</div>
}

export const ExamplePrefetching = () => {
  const [renderComponent, setRenderComponent] = useState(false)
  const queryClient = useQueryClient()

  const prefetchData = async () => {
    await queryClient.prefetchQuery({
      queryKey: [{ queryIdentifier: 'api', username: 'userOne' }],
      queryFn: fetchData,
      staleTime: 60000,
    })
    setRenderComponent(true)
  }

  return (
    <div>
      <button onClick={prefetchData}> Prefetch Data</button>
      {renderComponent ? <PrefetchedDataComponent /> : null}
    </div>
  )
}

export const QueryInvalidation = () => {
  const { data } = useQuery({
    queryKey: [{ queryIdentifier: 'api', username: 'userOne' }],
    queryFn: fetchData,
  })
  const queryClient = useQueryClient()

  return (
    <div>
      <p>{data?.hello}</p>
      <button
        onClick={() =>
          queryClient.invalidateQueries({
            queryKey: [{ queryIdentifier: 'api' }],
          })
        }
      >
        Invalidate Query
      </button>
    </div>
  )
}

export const QueryCancelation = () => {
  const { data } = useQuery({
    queryKey: [{ queryIdentifier: 'api', username: 'userOne' }],
    queryFn: fetchData,
  })
  const queryClient = useQueryClient()

  return (
    <div>
      <p>{data?.hello}</p>
      <button
        onClick={() =>
          queryClient.cancelQueries({
            queryKey: [{ queryIdentifier: 'api' }],
          })
        }
      >
        Cancel Query
      </button>
    </div>
  )
}

export default QueryCancelation
