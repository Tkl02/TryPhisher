import iconLogoBlack from '../../assets/images/iconLogoBlack.png'
import './style.Footer.css'
import { Link } from 'react-router-dom'

function Footer (){
    return(
        
            <div className="bodyFooter">
                <div className="rightsContainer">
                    <img src={iconLogoBlack} alt="" />
                    <p>@2025 - Leonardo Faustino All Rights Reserved</p>
                </div>
                <div className="menus">
                    <div className='linksContainer'></div>
                    <h3>Links Importantes</h3>
                    <Link to="/PoliciesPage">Politicas de privacidade</Link>
                </div>
            </div>
        
    )
}

export default Footer;