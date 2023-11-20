import styled from "styled-components";
import backgroundImg from '../../../assets/images/Vector.svg'
import { Cores } from "../../../styles";

export const HeaderContainer = styled.header`
  width: 100vw;
  .container{
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  background-image: url(${backgroundImg});
  padding: 64px ;
  color: ${Cores.corFonte1};
`
export const TextHeader = styled.a`
  text-align: right;
  font-family: Roboto;
  font-size: 18px;
  font-weight: 900;
`
