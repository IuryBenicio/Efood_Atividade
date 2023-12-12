import { ImgContainer } from "./styles"

type Props = {
  capa?: string
  tipo?: string
  titulo?: string
}

const BannerMenu = ({capa, tipo, titulo}: Props)=>(
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
