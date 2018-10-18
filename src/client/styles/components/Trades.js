import styled from 'styled-components'
import { red, white, black } from '../colors'
import { serif } from '../typography'
import media from '../media'
import ButtonBase from '../base/Button'

export const Container = styled.div`
  box-sizing: border-box;
  overflow-x: hidden;
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

export const Header = styled.div`
  display: flex;
  width: 80%;
  height: auto;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  border-bottom: 0.1rem solid ${black};
  margin: 2rem;
  padding-bottom: 1rem;
  ${media.tablet`
    width: 90%;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
  `}
 
`

export const Title = styled.h1`
  font-size: 3rem;
  color: ${white};
  font-family: ${serif};
  text-align: center;
  
`

export const Button = styled(ButtonBase)`
  background: ${white};
  border: 0.25rem solid ${black};
  color: ${red};
  font-size: 3rem;
  transition: all 0.25s;
  &:hover {
    background: ${red};
    color: ${white};
    box-shadow: inset 0 0 0 0.05rem ${black};
  }
   ${media.tablet`
      width: 100%;
  `}
  
`

