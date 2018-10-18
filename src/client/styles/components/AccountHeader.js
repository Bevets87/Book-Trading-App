import styled from 'styled-components'
import { red, white, black } from '../colors'
import { serif } from '../typography'
import media from '../media'



export const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background: ${red};
  overflow-y: scroll;
  -ms-overflow-style: none;  // IE 10+
  &::-webkit-scrollbar {
    display: none;
  }

`
export const Title = styled.h1`
  font-size: 3rem;
  color: ${white};
  border-bottom: 0.1rem solid ${black};
  font-family: ${serif};
  text-align: left;
  width: 80%;
  margin: 2rem;
  padding-bottom: 1rem;
  ${media.tablet`
    display: none;
  `}
`