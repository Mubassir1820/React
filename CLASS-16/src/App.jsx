import './App.css'
import Parent from './components/Parent'
import Countries from './components/Countries'
import { QueryClient, QueryClientProvider } from 'react-query'

function App() {

  // Create a client
  const queryClient = new QueryClient()

  return (
    <>
      {/*
      useEffect() => Side Effect => Data Fetching, DOM, event

      useEffect(() => {
        
        },[dependecy array])
      */}
      {/* <Parent></Parent> */}

      <QueryClientProvider client={queryClient}>
        <Countries></Countries>
      </QueryClientProvider>
      
    </>
  )
}

export default App


// Component lifecycle, useEffect, axios, queryClient
