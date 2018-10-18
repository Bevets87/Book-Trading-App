import styled from 'styled-components'
import { red } from '../colors'

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  padding-top: 7rem;
  background: ${red};
  overflow-y: scroll;
  -ms-overflow-style: none;  // IE 10+
  &::-webkit-scrollbar {
    display: none;
  }
`

export default Container 