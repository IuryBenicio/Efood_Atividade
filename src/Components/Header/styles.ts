import styled from 'styled-components'
import backgroundImg from '../../assets/images/Vector.svg'
import { Cores } from '../../styles'

export const HeaderContainer = styled.header`
  width: 100vw;
  .HContainer {
    margin: 0 auto;
    width: 539px;
  }
  text-align: center;
  background-image: url(${backgroundImg});
  padding: 40px;
  img {
    cursor: pointer;
  }
  h2 {
    margin-top: 138.5px;
    color: ${Cores.corFonte1};
    text-align: center;
    font-family: Roboto;
    font-size: 36px;
    font-weight: 900;
  }
`
