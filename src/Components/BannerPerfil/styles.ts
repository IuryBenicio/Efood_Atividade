import styled from "styled-components";

type Props = {
  background?: string
}

export const ImgContainer = styled.div<Props>`
  background-image: url(${(Props)=> Props.background});
  background-repeat: no-repeat;
  background-size: cover;
  width: 100vw;
  height: 280px;
  .text{
    background-color: rgba(0,0,0,0.5);
    width: 100vw;
    height: 280px;
    .container{
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      height: 280px;
      padding: 32px;
        span{
          color: #FFF;
          font-family: Roboto;
          font-size: 32px;
          font-weight: 100;
        }
        h2{
          color: #FFF;
          font-family: Roboto;
          font-size: 32px;
          font-weight: 900;
        }
    }
    color: white;
  }

`

