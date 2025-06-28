import { Outlet } from 'react-router-dom'
import './App.css'
import TaskBar from './components/taskbar/TaskBar'
import Footer from './components/footer/Footer'

function App() {

  return (
    <div>
      <TaskBar/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default App
