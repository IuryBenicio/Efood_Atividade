import styled from "styled-components";
import backgroundImg from '../../../assets/images/Vector.svg'
import { Cores } from "../../../styles";

export const HeaderContainer = styled.header`
  width: 100vw;
  .container{
    display: flex;
    justify-content: space-between;
    align-self: center;
    align-items: center;
    text-align: center;
  }
  background-image: url(${backgroundImg});
  padding: 64px ;
  color: ${Cores.corFonte1};
`

export const TextHeader = styled.a`
  text-align: start;
  width: 197px;
  font-family: Roboto;
  font-size: 18px;
  font-weight: 900;
`
