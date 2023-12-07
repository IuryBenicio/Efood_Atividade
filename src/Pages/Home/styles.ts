import styled from "styled-components";
import { Cores } from "../../styles";

export const ProductContainer = styled.div`
  padding: 80px 0;
  background-color: ${Cores.background};
  ul{
    display: grid;
    grid-template-columns: 1fr 1fr;
    row-gap: 48px;
    column-gap: 80px;
    li{
      cursor: pointer;
      display: inline-block;
      .imgContainer{
        position: relative;
        height: 217px;
      }
      p{
        padding: 16px 0;
        font-size: 14px;
        font-weight: 400;
        line-height: 22px;
        color: ${Cores.corFonte1};
      }
    }
  }
`
