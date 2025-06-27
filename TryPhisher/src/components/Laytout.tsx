import Taskbar from './Taskbar/Taskbar'
import Footer from './Footer/Footer'
import {Outlet} from 'react-router-dom'

const Layout = () => {
    return (
        <>
            <Taskbar/>
            <Outlet/>
            <Footer/>
        </>
    );
}

export default Layout;