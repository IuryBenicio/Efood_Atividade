import { HeaderContainer } from "./styles"
import Logo from '../../assets/images/logo.svg'
import { useNavigate } from "react-router-dom"

const Header = ()=>{
  const navigate = useNavigate()

  const NavigateHome = ()=>{
    navigate('/')
  }
  return(
    <HeaderContainer>
      <div className="HContainer">
        <img onClick={()=>NavigateHome()} src={Logo} alt="efood" />
        <h2>Viva experiências gastronômicas no conforto da sua casa </h2>
      </div>
    </HeaderContainer>
  )
}

export default Header
