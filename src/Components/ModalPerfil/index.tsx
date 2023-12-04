import { ModalContainer, ContentContainer, CloseImg } from "./styles"
import IMG from '../../assets/images/Itens/Pizza_Marguerita.svg'
import Close from '../../assets/images/Itens/close 1 (1).png'

const ModalPerfil = ()=>{
  return(
    <ModalContainer>
      <ContentContainer>
        <CloseImg src={Close} alt="Clique para fechar" />
        <div className="containerModal">
          <img src={IMG} alt="" />
          <div className="text">
            <h3>Pizza Marguerita</h3>
            <div className="description">
              <p>A pizza Margherita é uma pizza clássica da culinária italiana,
                reconhecida por sua simplicidade e sabor inigualável.
                Ela é feita com uma base de massa fina e crocante, coberta com
                molho de tomate fresco, queijo mussarela de alta qualidade,
                manjericão fresco e azeite de oliva extra-virgem. A combinação
                de sabores é perfeita, com o molho de tomate suculento e ligeiramente
                ácido, o queijo derretido e cremoso e as folhas de manjericão frescas,
                que adicionam um toque de sabor herbáceo. É uma pizza simples, mas
                deliciosa, que agrada a todos os paladares e é uma ótima opção para
                qualquer ocasião.</p>
              <span>Serve: de 2 a 3 pessoas</span>
            </div>
            <button>Adicionar ao carrinho - R$ 60,90</button>
          </div>
        </div>
      </ContentContainer>
    </ModalContainer>
  )
}

export default ModalPerfil
