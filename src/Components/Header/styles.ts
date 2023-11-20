import styled from "styled-components";
import backgroundImg from '../../assets/images/Vector.svg'

export const HeaderContainer = styled.header`
  width: 100vw;
  .HContainer{
    margin: 0 auto;
    width: 539px;
  }
  text-align: center;
  background-image: url(${backgroundImg});
  height: 384px;
  img{
    margin-top: 64px;
  }
  h2{
    margin-top: 138.5px;
    color: #E66767;
    text-align: center;
    font-family: Roboto;
    font-size: 36px;
    font-weight: 900;
  }
`
