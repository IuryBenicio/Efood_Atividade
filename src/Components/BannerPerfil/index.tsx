import { Item as ItemProps } from "../../Pages/Home";
import { ImgContainer } from "./styles"

type Props = {
  Cardapio: ItemProps
}

const BannerMenu = ({Cardapio}: Props)=>(
  <ImgContainer background={Cardapio.capa}>
    <div className="text">
      <div className="container">
        <span>{Cardapio.tipo}</span>
        <h2>{Cardapio.titulo}</h2>
      </div>
    </div>
  </ImgContainer>
)

export default BannerMenu
