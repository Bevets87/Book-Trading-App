import styled from 'styled-components'
import ButtonBase from '../base/Button'
import { serif } from '../typography'
import { red, white, black } from '../colors'

export const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1000;
  background: ${red};
  opacity: 0.95;
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  overflow-y: scroll;
`


export const Header = styled.div`
  height: auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 90%;
  background: ${red};

 
 
`
export const Title = styled.h1`
  font-size: 5rem;
  color: ${white};
  font-family: ${serif};
  text-align: center;
  border-bottom: 0.25rem solid ${white};
 
`




export const Button = styled(ButtonBase)`
  background: ${white};
  color: ${red};
  font-size: 3rem;
  font-family: ${serif};
  width: 20rem;
  height: auto;
  padding: 1rem;
  border: 0.2rem solid ${black};
  transition: all 0.25s;
  
  &:hover {
    background: ${red};
    color: ${white};
  }
 
  
 
`
export const Buttons = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 90%;
  height: auto;
  margin-top: 3rem;
  padding-bottom: 2rem;
 
`



export const Box = styled.div`
  margin-top: 3rem;
`



