import Header from '../../Components/Header'
import Restaurante from '../../Components/Restaurant'
import Footer from '../../Components/Footer'
import { useNavigate } from 'react-router-dom'
import { ProductContainer } from './styles'
import { Carregando } from '../../GlobalStyles'
import logo from '../../assets/images/logo.svg'
import { useGetRestaurantesQuery } from '../../services/api'
import Loader from '../../Components/Loader'
// import { useEffect } from "react"

function Home() {
  const navigate = useNavigate()
  const { data: restaurantes, isLoading } = useGetRestaurantesQuery()

  if (isLoading) {
    return (
      <Carregando>
        <img src={logo} alt="efood" />
        <Loader />
      </Carregando>
    )
  }
  return (
    <>
      <Header />
      <ProductContainer>
        <div className="container">
          <ul>
            {restaurantes &&
              restaurantes.map((e) => (
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
