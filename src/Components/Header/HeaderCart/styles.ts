import styled from 'styled-components'
import backgroundImg from '../../../assets/images/Vector.svg'
import { Cores, breakpoints } from '../../../GlobalStyles'

export const HeaderContainer = styled.header`
  width: 100%;
  .container {
    display: flex;
    justify-content: space-between;
    align-self: center;
    align-items: center;
    text-align: center;
    img {
      cursor: pointer;
    }
    @media (max-width: ${breakpoints.tablet}) {
      gap: 30px;
    }
  }
  @media (max-width: ${breakpoints.tablet}) {
    img {
      width: 90px;
    }
    display: flex;
    justify-content: space-between;
    gap: 5px;

    & {
      padding: 20px;
      width: 100%;
    }
  }
  background-image: url(${backgroundImg});
  padding: 60px;
  color: ${Cores.corFonte1};
`

export const TextHeader = styled.a`
  cursor: pointer;
  text-align: start;
  width: 197px;
  font-family: Roboto;
  font-size: 18px;
  font-weight: 900;
  @media (max-width: ${breakpoints.tablet}) {
    span {
      display: none;
    }
    & {
      max-width: auto;
      width: 100%;

      font-size: 14px;
      text-align: start;
    }
  }
`
