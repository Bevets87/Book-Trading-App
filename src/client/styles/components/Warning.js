import styled from 'styled-components'
import { red, white, black } from '../colors'
import ButtonBase from '../base/Button'

export const Container = styled.div`
  width: 100%;
  height: 100%;
  background: ${red};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const Text = styled.p`
  font-size: 5rem;
  color: ${white};
  font-weight: bold;
  text-align: center;
  padding: 0;
  margin: 0;
  width: 50%;
  
  
`

export const Button = styled(ButtonBase)`
  display: block;
  background: ${white};
  color: ${red};
  font-size: 5rem;
  width: auto;
  height: auto;
  margin: 0 auto;
  padding: 2rem;
  border: 0.2rem solid ${black} !important;
  transition: all 0.25s;
  &:hover {
    background: ${black};
    color: ${white};
    box-shadow: inset 0 0 0 0.1rem ${white};
  }
`