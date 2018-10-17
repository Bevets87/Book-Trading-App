import styled from 'styled-components'
import ButtonBase from '../base/Button'
import {  red, white, black, green } from '../colors'
import { serif } from '../typography'
import media from '../media'

const colors = { red, white, black, green }

export const Form = styled.form`
  position: relative;
  display: block;
  margin: 2rem auto;
  width: 80%;
  height: auto;
  padding: 1rem;
  padding-bottom: 5rem;
  background: ${white};
  border: 0.2rem solid ${black};
  border-radius: 0.5rem;
  
  &::-webkit-scrollbar {
    display: none;
  }
  ${media.phone`
    width: 95%;
  `}
 
`
export const Input = styled.input`
  display: block;
  margin: 1rem auto;
  font-size: 2.5rem;
  width: 95%;
  &::placeholder {
    color: ${black};
  }
`
export const Button = styled(ButtonBase)`
  display: block;
  margin: 1rem auto;
  font-size: 2.5rem;
  background: ${red};
  color: ${white};
  width: 95%;
`
export const Title = styled.h1`
  font-size: 5rem;
  color: ${red};
  font-weight: lighter;
  font-family: ${serif};
`
export const Label = styled.label`
  display: block;
  font-size: 2rem;
  color: ${red};
  font-weight: lighter;
  width: 95%;
  margin: 0 auto;
`

export const MessageBox = styled.div`
  position: absolute;
  width: 100%;
  height: auto;
  left: 0;
  bottom: 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  
`

export const HiLite = styled.span`
 
  color: ${props => props.color ? colors[props.color] : red};
  font-size: 2rem;
  font-weight: bold;
  font-family: ${serif};
  text-align: center;
`

