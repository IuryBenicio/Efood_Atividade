import { ModalContainer, ContentContainer, CloseImg } from "./styles"
import Close from '../../assets/images/Itens/close 1 (1).png'
import { CardapioType } from "../../Pages/Perfil"

interface Props extends CardapioType{
  clicou: ()=> void
}

const ModalPerfil = ({foto, descricao, nome, porcao, preco, clicou}: Props)=>{

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
          <img src={foto} alt="" />
          <div className="text">
            <h3>{nome}</h3>
            <div className="description">
              <p>{descricao}</p>
              <p>Serve: {porcao}</p>
            </div>
            <button>Adicionar ao carrinho - {getPreco(preco)}</button>
          </div>
        </div>
      </ContentContainer>
    </ModalContainer>
  )
}

export default ModalPerfil
