import React from 'react'
import ReactDOM from 'react-dom/client'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import './index.css'
import { ExamplePrefetching, QueryInvalidation, QueryCancelation } from './QueryClientExamples'
import InfiniteQuery from './InfiniteQuery'
import MultipleQueries from './MultipleQueries'
import PaginatedQuery from './PaginatedQuery'

const queryClient = new QueryClient()

// Use if your bundler doesn't support package exports
// const ReactQueryDevtoolsProduction = React.lazy(() =>
//   import('@tanstack/react-query-devtools/build/lib/index.prod.js').then(
//     (d) => ({
//       default: d.ReactQueryDevtools,
//     }),
//   ),
// )

const ReactQueryDevtoolsProduction = React.lazy(() =>
  import('@tanstack/react-query-devtools/production').then((d) => ({
    default: d.ReactQueryDevtools,
  }))
)

const CombinedProviders = () => {
  const [showDevtools, setShowDevtools] = React.useState(false)

  React.useEffect(() => {
    window.toggleDevtools = () => setShowDevtools((previousState) => !previousState)
  }, [])

  return (
    <QueryClientProvider client={queryClient}>
      <ExamplePrefetching />
      <QueryInvalidation />
      <QueryCancelation />
      <InfiniteQuery />
      <MultipleQueries />
      <PaginatedQuery />
      {showDevtools && (
        <React.Suspense fallback={null}>
          <ReactQueryDevtoolsProduction />
        </React.Suspense>
      )}
    </QueryClientProvider>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<CombinedProviders />)
