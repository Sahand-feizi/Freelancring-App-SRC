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
import { Toaster } from 'react-hot-toast'
import Project from './pages/Project'
import FreelancerLayout from './features/freelancer/FreelancerLayout'
import FreelancerDashboard from './pages/FreelancerDashboard'
import Proposals from './pages/Proposals'
import SubmitedProjects from './pages/SubmitedProjects'
import AdminLayout from './features/admin/AdminLayout'
import AdminDashboard from './pages/AdminDashboard'
import Users from './pages/Users'

const queryClient = new QueryClient()

function App() {

  return (
    <QueryClientProvider client={queryClient}>
      <DarkModeProvider>
        <Toaster />
        <Routes>
          <Route path='/auth' element={<Auth />} />
          <Route path='complete-profile' element={<CompleteProfile />} />
          <Route path='/owner' element={
            <ProtectRoute>
              <OwnerLayout />
            </ProtectRoute>} >
            <Route index element={<Navigate to='dashboard' />} />
            <Route path='dashboard' element={<OwnerDashboard />} />
            <Route path='projects' element={<Projects />} />
            <Route path='projects/:id' element={<Project />} />
          </Route>
          <Route path='/freelancer' element={
            <ProtectRoute>
              <FreelancerLayout />
            </ProtectRoute>} >
            <Route index element={<Navigate to='dashboard'/>} />
            <Route path='dashboard' element={<FreelancerDashboard />} />
            <Route path='proposals' element={<Proposals />} />
            <Route path='projects' element={<SubmitedProjects />} />
          </Route>
          <Route path='/admin' element={
            <ProtectRoute>
              <AdminLayout />
            </ProtectRoute>
          } >
            <Route index element={<Navigate to='dashboard'/>} />
            <Route path='dashboard' element={<AdminDashboard />} />
            <Route path='users' element={<Users />} />
            <Route path='projects' element={<SubmitedProjects />} />
            <Route path='proposals' element={<Proposals />} />
          </Route>
        </Routes>
      </DarkModeProvider>
    </QueryClientProvider>
  )
}

export default App
