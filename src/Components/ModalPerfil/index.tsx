import { ModalContainer, ContentContainer, CloseImg } from "./styles"
import Close from '../../assets/images/Itens/close 1 (1).png'
import { CardapioType } from "../../Pages/Perfil"

type Props = {
  clicou: ()=> void
  Cardapio: CardapioType
}

const ModalPerfil = ({Cardapio, clicou}: Props)=>{

  const getPreco = (preco: number)=> {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
  }).format(preco)
  }

  return(
    <ModalContainer>
      <ContentContainer>
        <CloseImg src={Close} alt="Clique para fechar" onClick={clicou} />
        <div className="containerModal">
          <img src={Cardapio.foto} alt="" />
          <div className="text">
            <h3>{Cardapio.nome}</h3>
            <div className="description">
              <p>{Cardapio.descricao}</p>
              <p>Serve: {Cardapio.porcao}</p>
            </div>
            <button>Adicionar ao carrinho - {getPreco(Cardapio.preco)}</button>
          </div>
        </div>
      </ContentContainer>
    </ModalContainer>
  )
}

export default ModalPerfil
