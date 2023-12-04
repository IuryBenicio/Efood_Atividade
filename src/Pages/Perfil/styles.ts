import styled from "styled-components";
import { Cores } from "../../styles";


export const ItensContainer = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  row-gap: 32px;
  padding: 60px 0;
  justify-items: center;
`

export const PerfilContainer = styled.div`
  position: relative;
`
export const ContainerModal = styled.div`
  position: absolute;
  background-color: ${Cores.background};
  height: 100vh;
  width: 100vw;
`
