import axios from 'axios'
import './App.css'
import DarkModeProvider from './context/DarkModeContext'

function App() {
  
  axios.get('/user345353545')

  return (
    <DarkModeProvider>
    </DarkModeProvider>
  )
}

export default App
