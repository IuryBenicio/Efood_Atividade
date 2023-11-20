import Item from "../../Components/ItemPerfil"
import { ItensContainer } from "./styles"
import PizzaMarguerita from '../../assets/images/Itens/Pizza_Marguerita.svg'

const Itens = ()=>{
  const description = 'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
  return(
    <ItensContainer className="container">
      <Item title="Pizza Marguerita" img={PizzaMarguerita} description={description}/>
      <Item title="Pizza Marguerita" img={PizzaMarguerita} description={description}/>
      <Item title="Pizza Marguerita" img={PizzaMarguerita} description={description}/>
      <Item title="Pizza Marguerita" img={PizzaMarguerita} description={description}/>
      <Item title="Pizza Marguerita" img={PizzaMarguerita} description={description}/>
      <Item title="Pizza Marguerita" img={PizzaMarguerita} description={description}/>
    </ItensContainer>
  )
}

export default Itens
