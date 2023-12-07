import { ProductImg, TitleStars, ContainerTexT, SaibaMais, Tags} from "./styles"
import Estrela from '../../assets/images/estrela.svg'
import Tag from "../Tag"

type Props = {
  titulo: string
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
  destacado?: boolean
}

const Restaurante = ({titulo, tipo, avaliacao, descricao, capa, destacado}:Props)=>{

  const getDescricao = (descricao: string) =>{
    if(descricao.length > 95) {
      return descricao.slice (0, 310) + '...'
    }
    return descricao
  }

  return (
    <>
      <div className="imgContainer">
        <ProductImg src={capa} alt={titulo} />
        <Tags>
          <Tag>{tipo}</Tag>
          {destacado && (
            <Tag>Destaque da semana</Tag>
          )}
        </Tags>
      </div>
      <ContainerTexT>
        <TitleStars>
          <h3>{titulo}</h3>
          <div className="stars">{avaliacao}<img src={Estrela}/></div>
        </TitleStars>
        <p>{getDescricao(descricao)}</p>
        <SaibaMais>Saiba mais</SaibaMais>
      </ContainerTexT>
    </>
  )
}
export default Restaurante
