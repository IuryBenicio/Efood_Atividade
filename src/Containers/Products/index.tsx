import { ProductContainer, ProductImg, TitleStars, ContainerTexT, SaibaMais} from "./styles"
import { ProductModels } from "../../Models/ProductsModels"
import Estrela from '../../assets/images/estrela.svg'

const Products = ()=>(
  <ProductContainer>
    <div className="container">
      <ul>
        {ProductModels.map(item=>(
          <li key={item.id}>
            <ProductImg src={item.image} alt={item.title} />
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

export default Products
