import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/homepage/HomePage";

function MainRoutes(){
    return(
        <Routes>
            <Route element={<HomePage />} path="/"/>
        </Routes>
    )
}

export default MainRoutes;