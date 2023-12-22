import styled from "styled-components";
import { Cores } from "../../styles";

export const CloseImg = styled.img`
  cursor: pointer;
  position: absolute;
  z-index: 2;
  top: 0;
  right: 0;
  width: 16px;
  height: 16px;
  margin-right: 8px;
  margin-top: 8px;
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
      .description{
        height: 176px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        p{
        color: ${Cores.corFonteWhite1};
        font-size: 14px;
        font-weight: 400;
        line-height: 22px;
      }
      }
      h3{
        color: ${Cores.corFonteWhite1};
        font-size: 18px;
        font-weight: 900;
        margin-bottom: 16px;
      }

      button{
        padding: 4px 7px ;
        background-color: ${Cores.corFonteWhite1};
        color: ${Cores.corFonte1};
        font-weight: 700;
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
