import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter} from 'react-router-dom'
import MainRoutes from './routes/Routes.tsx'
import TaskBar from './components/taskbar/Taskbar.tsx'
import Footer from './components/footer/Footer.tsx'

createRoot(document.getElementById('root')!).render(
  <>
  <TaskBar/>
  <BrowserRouter>
    <MainRoutes/>
  </BrowserRouter>
  <Footer/>
  </>
)
