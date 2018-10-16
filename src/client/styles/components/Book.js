import styled from 'styled-components'
import { black, white, red } from '../colors'
import ButtonBase from '../base/Button'
import { serif } from '../typography';


const colors = { black, white, red }


export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  height: auto;
  width: 10rem;
  margin: 1rem;
  cursor: pointer;
`

export const Cover = styled.img`
  height: 15rem;
  width: 10rem;
  border: 0.5rem solid ${props => props.borderColor ? colors[props.borderColor] : white};
  border-bottom: none;
`

export const Button = styled(ButtonBase)`
  background: ${props => props.backgroundColor ? colors[props.backgroundColor] : black};
  color: ${props => props.color ? colors[props.color] : white};
  font-size: 1.75rem;
  width: 10rem;
  height: auto;
  font-weight: bold;
  font-family: ${serif};
  border: 0.5rem solid ${props => props.borderColor ? colors[props.borderColor] : white};
  border-top: none;
  

`

export const LineThrough = styled.span`
  text-decoration: line-through;
`



