import styled from 'styled-components'

import { breakpoints } from '../../GlobalStyles'

export const ItensContainer = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  row-gap: 32px;
  padding: 60px 0;
  justify-items: center;
  @media (max-width: ${breakpoints.tablet}) {
    & {
      grid-template-columns: 1fr;
    }
  }
`
