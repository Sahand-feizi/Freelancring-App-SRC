import './App.css'
import DarkModeProvider from './context/DarkModeContext'
import Auth from './pages/Auth'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Navigate, Route, Routes } from 'react-router-dom'
import CompleteProfile from './pages/CompleteProfile'
import ProtectRoute from './ui/ProtectRoute'
import OwnerLayout from './features/owner/OwnerLayout'
import OwnerDashboard from './pages/OwnerDashboard'
import Projects from './pages/Projects'

const queryClient = new QueryClient()

function App() {

  return (
    <QueryClientProvider client={queryClient}>
      <DarkModeProvider>
        <Routes>
          <Route path='/auth' element={<Auth />} />
          <Route path='complete-profile' element={<CompleteProfile />} />
          <Route path='/owner' element={
            <ProtectRoute>
              <OwnerLayout />
            </ProtectRoute>} >
            <Route index element={<Navigate to='dashboard'/>} />
            <Route path='dashboard' element={<OwnerDashboard />} />
            <Route path='projects' element={<Projects />} />
          </Route>
        </Routes>
      </DarkModeProvider>
    </QueryClientProvider>
  )
}

export default App
