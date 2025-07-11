import { Link } from "react-router-dom";
import IconLogo from '../../assets/images/iconLogo.png'
import IconLogin from '../../assets/images/user.png'
import './Taskbar.style.css'

function TaskBar (){
    return(
        <div className="bodytaskbar">
            <div className="logotaskbar"><img src={IconLogo} alt="" /></div>
            <div className="pagestaskbar">
                <Link to="/">Inicio</Link>
                <Link to="/about">Sobre</Link>
                <Link to="/TrainingPage">Treinamento</Link>
                <Link to="/CertificationPage">Certiicação</Link>
            
            </div>
            <div className="logintaskbar"><img src={IconLogin} alt="" /></div>
        </div>
    )
}

export default TaskBar;