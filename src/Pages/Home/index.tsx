import Header from '../../Components/Header'
import Restaurante from '../../Components/Restaurant'
import Footer from '../../Components/Footer'
import { useNavigate } from 'react-router-dom'
import { ProductContainer } from './styles'
import { CardapioType } from '../../Containers/Cardapio'
import { Carregando } from '../../styles'
import logo from '../../assets/images/logo.svg'
import { useGetRestaurantesQuery } from '../../services/api'
// import { useEffect } from "react"

export type Item = {
  id?: number
  titulo: string
  destacado?: boolean
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
  cardapio?: CardapioType[]
}

function Home() {
  const navigate = useNavigate()
  const { data: restaurantes } = useGetRestaurantesQuery()

  if (!restaurantes) {
    return (
      <Carregando>
        <img src={logo} alt="efood" />
        <h2>CARREGANDO ...</h2>
      </Carregando>
    )
  }
  return (
    <>
      <Header />
      <ProductContainer>
        <div className="container">
          <ul>
            {restaurantes.map((e) => (
              <li key={e.id} onClick={() => navigate(`/Perfil/${e.id}`)}>
                <Restaurante
                  avaliacao={e.avaliacao}
                  capa={e.capa}
                  descricao={e.descricao}
                  tipo={e.tipo}
                  titulo={e.titulo}
                  destacado={e.destacado}
                />
              </li>
            ))}
          </ul>
        </div>
      </ProductContainer>
      <Footer />
    </>
  )
}

export default Home
