import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/homepage/HomePage";
import AboutPage from '../pages/about/AboutPage'
import CertificationPage from '../pages/certification/CertificationPage'
import TrainingPage from '../pages/training/TrainingPage'

function MainRoutes() {
    return (
        <Routes>
            <Route element={<HomePage />} path="/" />
            <Route element={<AboutPage />} path="/about" />
            <Route element={<TrainingPage />} path="/training" />
            <Route element={<CertificationPage />} path="/certification" />
        </Routes>
    )
}

export default MainRoutes;