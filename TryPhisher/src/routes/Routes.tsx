import {createBrowserRouter } from "react-router-dom";

//Importação de paginas
import HomePage from "../pages/homepage/HomePage";
import About from '../pages/about/About'
import Training from '../pages/training/training'
import Certification from '../pages/certification/certification'
import Login from '../pages/login/Login'
import App from "../App";


const router = createBrowserRouter([
    {
        path:"/",
        element: <App/>,
        children:[
            {path: "", element: <HomePage/>},
            {path: "About", element: <About/>},
            {path: "Training", element: <Training/>},
            {path: "Certification", element: <Certification/>},
            {path: "Login", element: <Login/>},
        ],
    },
]);

export default router;