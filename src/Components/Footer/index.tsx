import { FooterSection, FContainer, SocialMedia } from "./styles"
import Logo from '../../assets/images/logo.svg'
import Twiiter from '../../assets/images/SocialMedia/twitter.svg'
import Facebook from '../../assets/images/SocialMedia/facebook.svg'
import Instagram from '../../assets/images/SocialMedia/instagram.svg'

const Footer = ()=>{
  return (
    <FooterSection>
      <FContainer>
        <img className="imgNome" src={Logo} alt='efood' />
        <SocialMedia>
          <img src={Instagram} alt="Instagram" />
          <img src={Facebook} alt="Facebook" />
          <img src={Twiiter} alt="Twitter" />
        </SocialMedia>
        <p>A efood é uma plataforma para divulgação de estabelecimentos,
          a responsabilidade pela entrega, qualidade dos produtos é toda
          do estabelecimento contratado. </p>
      </FContainer>
    </FooterSection>
  )
}

export default Footer
