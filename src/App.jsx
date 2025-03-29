import axios from 'axios'
import './App.css'
import DarkModeProvider from './context/DarkModeContext'
import Auth from './pages/Auth'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Route, Routes } from 'react-router-dom'
import CompleteProfile from './pages/CompleteProfile'

const queryClient = new QueryClient()

function App() {

  return (
    <QueryClientProvider client={queryClient}>
      <DarkModeProvider>
        <Routes>
          <Route path='/auth' element={<Auth />} />
          <Route path='complete-profile' element={<CompleteProfile />} />
        </Routes>
      </DarkModeProvider>
    </QueryClientProvider>
  )
}

export default App
