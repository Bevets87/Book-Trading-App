import styled from 'styled-components'
import { white, red, black, green } from '../colors'
import ButtonBase from '../base/Button'

import { serif } from '../typography'
import { XSquare } from 'styled-icons/feather/XSquare.cjs'
import { CheckSquare } from 'styled-icons/feather/CheckSquare.cjs'

const colors = { red, black, green }


export const Container = styled.div`
  display: flex;
  height: 15rem;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  background: ${white};
  border: 0.25rem solid ${black};
  margin-top: 1rem;

   
`

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-evenly;
  
  height: 100%;
`

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  
`

export const Title = styled.h1`
  font-size: 1.5rem;
  font-family: ${serif};
  color: ${props => props.color ? colors[props.color] : black };

`



export const Italic = styled.span`
  font-style: italic;
  color: ${red};
  
`

export const Underline = styled.span`
  text-decoration: underline;
  color: ${red};
  
`

export const HiLite = styled.span`
  color: ${black};
  font-size: 1.3rem;
  background: ${red};
  border-radius: 0.2rem;
`







export const Button = styled(ButtonBase)`
  background: rgba(0,0,0,0);
  height: 7rem;
  width: 7rem;
  padding: 0;
  margin: 0;
  
`



export const Buttons = styled.div`
 
  display: flex;
  height: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const CancelBox = styled(XSquare)`
  stroke: ${black};

  
`

export const CheckBox = styled(CheckSquare)`
  stroke: ${red};
  height: 7rem;
  width: auto;
  
  
`





