import axios from 'axios'
import './App.css'
import DarkModeProvider from './context/DarkModeContext'
import Auth from './pages/Auth'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient()

function App() {

  return (
    <QueryClientProvider client={queryClient}>
      <DarkModeProvider>
        <Auth />
      </DarkModeProvider>
    </QueryClientProvider>
  )
}

export default App
