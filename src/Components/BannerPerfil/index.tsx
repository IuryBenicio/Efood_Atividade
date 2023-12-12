import { ImgContainer } from "./styles"
import { Item as ItemProps } from "../../Pages/Home"

type Props = {
  banner: ItemProps[]
}

const BannerMenu = ({banner}: Props)=>(
  <ImgContainer background={banner.capa}>
    <div className="text">
      <div className="container">
        <span>{banner.tipo}</span>
        <h2>{banner.titulo}</h2>
      </div>
    </div>
  </ImgContainer>
)

export default BannerMenu
