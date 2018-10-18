import styled from 'styled-components'
import ButtonBase from '../base/Button'
import {  red, white, black } from '../colors'
import { serif } from '../typography'
import media from '../media'

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: ${red};
  padding-top: 7rem;
  -ms-overflow-style: none;  // IE 10+
 
  &::-webkit-scrollbar {
    display: none;
  }
  ${media.tablet`
    
    overflow-y: scroll;
    background: ${white};
  
  `}
`
export const Form = styled.form`
  position: relative;
  z-index: 0;
  display: block;
  width: 60rem;
  height: auto;
  padding: 1rem;
  padding-bottom: 2rem;
  background: ${white};
  border: 0.2rem solid ${black};
  border-radius: 0.5rem;
  -ms-overflow-style: none; 
  overflow: -moz-scrollbars-none; 
  &::-webkit-scrollbar {
    display: none;
  }
  ${media.tablet`
    overflow-y: scroll;
    padding-top: 0;
    border: none;
    border-radius: 0;
    width: 95%;
  `}
`
export const Input = styled.input`
  display: block;
  margin: 1rem auto;
  font-size: 3rem;
  width: 95%;
`
export const Button = styled(ButtonBase)`
  display: block;
  margin: 1rem auto;
  font-size: 3rem;
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
  font-size: 1.5rem;
  color: ${red};
  font-weight: lighter;
  width: 95%;
  margin: 0 auto;
`

export const ErrorContainer = styled.div`
  width: 100%;
  height: 3rem;
  display: block;
  text-align: center;
`

export const ErrorMessage = styled.span`
  font-size: 2rem;
  color: ${red};
  font-weight: bolder;
  text-align: center;
`