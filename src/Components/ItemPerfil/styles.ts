import styled from "styled-components";
import { Cores } from "../../styles";

export const ItemCardapio = styled.div`
  width: 320px;
  height: 338px;
  background: ${Cores.corFonte1};
  .cardapio_content{
    padding: 8px;
    img{
      width: 304px;
      height: 167px;
    }
    h3{
      color: ${Cores.corFonteWhite1};
      font-size: 16px;
      font-weight: 900;
      margin-top: 8px;
    }
    p{
      margin: 8px 0;
      color: ${Cores.corFonteWhite1};
      font-size: 14px;
      font-weight: 400;
      line-height: 22px;
    }
    button{
      border: none;
      width: 100%;
      text-align: center;
      color: ${Cores.corFonte1};
      background-color: ${Cores.corFonteWhite1};
      text-align: center;
      font-family: Roboto;
      font-size: 14px;
      font-weight: 700;
    }
  }
`
