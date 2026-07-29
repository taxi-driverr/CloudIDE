import { Route, Routes } from 'react-router-dom'
import { CreateProject } from './pages/CreateProject'
import './App.css'
import PingComponent from './components/atoms/pingComponent'

 

function App() {
  return(
     <Routes>
      <Route path="/" element={<CreateProject />} />
    </Routes>
  )
}

export default App
