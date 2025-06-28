import iconLogo from '../../assets/images/iconLogo.png'
import { NavLink } from 'react-router-dom'
import userIcon from '../../assets/images/userIcon.png'
import './style.TaskBar.css'

function TaskBar (){
    return(
        <div className="bodyTaskBar">
            <img src={iconLogo} id='iconLogoTaskbar' />
            <div>
                <nav>
                    <NavLink to="/" className="link">Inicio</NavLink>
                    <NavLink to="/about" className="link">Sobre</NavLink>
                    <NavLink to="/training" className="link">Treinamento</NavLink>
                    <NavLink to="/certification" className="link">Certificação</NavLink>
                </nav>
            </div>
            <NavLink to="/Login" className="link"><img src={userIcon} alt="" /></NavLink>
        </div>
    )
}

export default TaskBar;