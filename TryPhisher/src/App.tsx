import './App.css'
import Footer from './components/Footer/Footer'
import TaskBar from './components/Taskbar/Taskbar'
import MainRoutes from './routes/Routes'

function App() {

  return (
    <>
      <TaskBar />
      <main>
        <MainRoutes />
      </main>
      <Footer />
    </>
  )
}

export default App;
