import blackiconlogo from '../../assets/images/blackiconlogo.png'
import whatsapp from '../../assets/images/phonecall.png'
import './Footerstyle.css'

function Footer() {
    return (
        <div className="bodyfooter">
            <div className="first">
                <img src={blackiconlogo} alt="" />
                <p>@2025 - Leonardo Faustino All rights reserved</p>
                <div className="whatssap"> <img src={whatsapp} alt="" /> <h3>(xx)x.xxxx-xxxx</h3> </div>
            </div>
            <div className="menu">
                <h3>Menu</h3>

            </div>
            <div className="linksImportants">
                <h3>Links Importantes</h3>

            </div>
            <div className="socialmedia">
                <h3>Redes Sociais</h3>

            </div>
        </div>
    )
}

export default Footer;