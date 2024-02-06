import { PulseLoader } from 'react-spinners'
import { Cores } from '../../GlobalStyles'
import { Container } from './styles'

const Loader = () => (
  <Container>
    <PulseLoader color={Cores.corFonte1} />
  </Container>
)

export default Loader
