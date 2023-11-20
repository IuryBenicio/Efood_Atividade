import { ItemCardapio } from "./styles"

export type Props = {
  title: string
  img: string
  description: string
}

const Item = ({title, img, description}: Props)=>{
  return(
    <>
      <ItemCardapio>
        <div className="cardapio_content">
          <img src={img} alt={title} />
          <h3>{title}</h3>
          <p>{description}</p>
          <button>Adicionar ao carrinho</button>
        </div>
      </ItemCardapio>
    </>
  )
}

export default Item
