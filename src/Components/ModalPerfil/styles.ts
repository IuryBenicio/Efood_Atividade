import styled from "styled-components";
import { Cores } from "../../styles";

export const CloseImg = styled.img`
  position: absolute;
  z-index: 2;
  top: 8;
  left: 8;
  width: 16px;
  height: 16px;
`

export const ModalContainer = styled.div`
  position: absolute;
  top: 0;
  width: 100vw;
  background: rgba(0,0,0,0.8);
  height: 100%;
  display: flex;
  justify-content: center;
`
export const ContentContainer = styled.div`
  position: sticky;
  top: 30vh;
  .containerModal{
    position: relative;
    display: flex;
    padding: 32px;
    img{
      width: 280px;
      height: 280px;
      object-fit: cover;
    }
    .text{
      height: 176px;
      .description{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
      }
      h3{
        color: ${Cores.corFonteWhite1};
        font-size: 18px;
        font-weight: 900;
        margin-bottom: 16px;
      }
      p{
        color: ${Cores.corFonteWhite1};
        font-size: 14px;
        font-weight: 400;
        line-height: 22px;
      }
      button{
        padding: 4px 7px ;
        background-color: ${Cores.corFonteWhite1};
        color: ${Cores.corFonte1};
        margin-top: 16px;
        border: none;
        cursor: pointer;
      }
      margin-left: 24px;
    }
  }
  width: 1024px;
  height: 344px;
  margin-top: 490px;
  background-color: ${Cores.corFonte1};
`
