import styled from 'styled-components'
import ButtonBase from '../base/Button'
import {  red, white, black } from '../colors'
import { serif } from '../typography'
import media from '../media'

export const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: ${red};
  padding-top: 7rem;
  &::-webkit-scrollbar {
    display: none;
  }
  ${media.tablet`
    min-height: 100%;
    overflow-y: scroll;
    background: ${white};
    padding-top: 9rem;
  `}
`
export const Form = styled.form`
  position: relative;
  z-index: 0;
  display: block;
  width: 60rem;
  height: auto;
  padding: 1rem;
  padding-bottom: 5rem;
  background: ${white};
  border: 0.2rem solid ${black};
  border-radius: 0.5rem;
  &::-webkit-scrollbar {
    display: none;
  }
  ${media.tablet`
    overflow-y: scroll;
    padding-top: 0;
    border: none;
    border-radius: 0;
    height: 100%;
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
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`

export const ErrorMessage = styled.span`
  font-size: 2rem;
  color: ${red};
  font-weight: bolder;
  text-align: center;
`