import LogoKaza from '../../assets/LOGOfooter.png'
import "../../utils/Style/footer.css"
import "../../utils/Style/style.css"

function Footer() {
  
    return (
      <div className='footer'>
      <img className="LogoKaza" src={LogoKaza} alt="Logo Kaza"></img>
      <p>© 2020 Kasa. All rights reserved</p>
      </div>
    )
  }

export default Footer