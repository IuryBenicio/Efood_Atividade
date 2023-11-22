import { ProductContainer, ProductImg, TitleStars, ContainerTexT, SaibaMais, Tags} from "./styles"
import { ProductModels } from "../../Models/ProductsModels"
import Estrela from '../../assets/images/estrela.svg'
import Tag from "../../Components/Tag"

const Products = ()=>{
  return (
    <ProductContainer>
      <div className="container">
        <ul>
          {ProductModels.map(item=>(
            <li key={item.id}>
              <div className="imgContainer">
                <ProductImg src={item.image} alt={item.title} />
                <Tags>
                  <Tag>{item.tags}</Tag>
                  {item.destaqueDaSemana && (
                    <Tag>Destaque da semana</Tag>
                  )}
                </Tags>
              </div>
              <ContainerTexT>
                <TitleStars>
                  <h3>{item.title}</h3>
                  <div className="stars">{item.stars}<img src={Estrela}/></div>
                </TitleStars>
                <p>{item.description}</p>
                <SaibaMais>Saiba mais</SaibaMais>
              </ContainerTexT>
            </li>
          ))}
        </ul>
      </div>
    </ProductContainer>
)
}
export default Products
