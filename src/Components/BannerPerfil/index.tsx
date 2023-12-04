import { ImgContainer } from "./styles"

type Props = {
  capa: string
  titulo: string
  tipo: string
}

const BannerMenu = ({capa, titulo, tipo}: Props)=>(
  <ImgContainer background={capa}>
    <div className="text">
      <div className="container">
        <span>{tipo}</span>
        <h2>{titulo}</h2>
      </div>
    </div>
  </ImgContainer>
)

export default BannerMenu
