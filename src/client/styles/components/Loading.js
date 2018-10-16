import styled from 'styled-components'
import { red, white, black } from '../colors'
import ButtonBase from '../base/Button'
import { serif } from '../typography'
import media from '../media'
import { ExchangeAlt } from 'styled-icons/fa-solid/ExchangeAlt.cjs'
import { Lock } from 'styled-icons/material/Lock.cjs' 
import { BookOpen } from 'styled-icons/feather/BookOpen.cjs'
import { Edit } from 'styled-icons/fa-regular/Edit.cjs'
import { Search } from 'styled-icons/feather/Search.cjs'

const colors = {
  red, white, black 
}

export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10000000;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background: ${red};
  width: 100vw;
  height: 100vh;
`

export const ModalButton = styled(ButtonBase)`
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(0,0,0,0);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 7rem;
  width: auto;
`

export const ModalLogo = styled(BookOpen)`
  stroke: ${white};
  height: 7rem;
  width: auto;
  fill: rgba(0,0,0,0);
  transition: all 0.25s;
  ${ModalButton}:hover & {
    fill: ${black};
  }
`

export const  ModalTitle = styled.span`
  font-size: 5rem;
  color: ${white};
  font-family: ${serif};
  ${media.desktop`
    display: none;
  `}
`
export const ModalSpinner = styled.svg`
  width: 25rem;
  height: 25rem;
  animation: rotate 2s linear infinite;
  

  & .path {
    stroke: ${props => colors[props.color]};
    stroke-linecap: round;
    animation: dash 1.5s ease-in-out infinite;
  }
  
  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }
  @keyframes dash {
    0% {
      stroke-dasharray: 1, 150;
      stroke-dashoffset: 0;
    }
    50% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -35;
    }
    100% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -124;
    }
  }
`

export const Container = styled.div`
  width: 100%;
  height: 100%;
  background: ${red};
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  ${media.tablet`
    justify-content: center;
    align-items: center;
  `}
`

export const Centered = styled.div`
  width: 100%;
  height: 100%;
  background: ${red};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

`
export const PulsatingEdit = styled(Edit)`
  stroke: ${white};
  height: 15rem;
  width: 15rem;
  fill: rgba(255,255,255,0);
  animation: pulsate 2s infinite;
  
   @keyframes pulsate {
    0% {
      transform: scale(0.8);
      fill: rgba(255,255,255,0);
    }
    25% {
      transform: scale(1);
      fill: rgba(255,255,255,0.5);
    }
    50% {
      transform: scale(0.8);
      fill: rgba(255,255,255,0);
    }
    75% {
      transform: scale(1);
      fill: rgba(255,255,255,0.5);
    }
    100% {
      transform: scale(0.8);
      fill: rgba(255,255,255,0);
    }
 

  
  }
`

export const PulsatingBook = styled(BookOpen)`
  stroke: ${white};
  height: 15rem;
  width: 15rem;
  fill: rgba(255,255,255,0);
  animation: pulsate 2s infinite;
  
   @keyframes pulsate {
    0% {
      transform: scale(0.8);
      fill: rgba(255,255,255,0);
    }
    25% {
      transform: scale(1);
      fill: rgba(255,255,255,0.5);
    }
    50% {
      transform: scale(0.8);
      fill: rgba(255,255,255,0);
    }
    75% {
      transform: scale(1);
      fill: rgba(255,255,255,0.5);
    }
    100% {
      transform: scale(0.8);
      fill: rgba(255,255,255,0);
    }
 

  
  }
`



export const PulsatingExchange = styled(ExchangeAlt)`
  stroke: ${white};
  height: 15rem;
  width: 15rem;
  fill: rgba(255,255,255,0);
  animation: pulsate 2s infinite;
  
   @keyframes pulsate {
    0% {
      transform: scale(0.8);
      fill: rgba(255,255,255,0);
    }
    25% {
      transform: scale(1);
      fill: rgba(255,255,255,0.5);
    }
    50% {
      transform: scale(0.8);
      fill: rgba(255,255,255,0);
    }
    75% {
      transform: scale(1);
      fill: rgba(255,255,255,0.5);
    }
    100% {
      transform: scale(0.8);
      fill: rgba(255,255,255,0);
    }
 

  
  }
`

export const PulsatingLock = styled(Lock)`
  stroke: ${white};
  height: 15rem;
  width: 15rem;
  fill: rgba(255,255,255,0);
  animation: pulsate 2s infinite;
  
   @keyframes pulsate {
    0% {
      transform: scale(0.8);
      fill: rgba(255,255,255,0);
    }
    25% {
      transform: scale(1);
      fill: rgba(255,255,255,0.5);
    }
    50% {
      transform: scale(0.8);
      fill: rgba(255,255,255,0);
    }
    75% {
      transform: scale(1);
      fill: rgba(255,255,255,0.5);
    }
    100% {
      transform: scale(0.8);
      fill: rgba(255,255,255,0);
    }
 

  
  }
`

export const PulsatingSearch = styled(Search)`
  stroke: ${white};
  height: 15rem;
  width: 15rem;
  fill: rgba(255,255,255,0);
  animation: pulsate 2s infinite;
  
   @keyframes pulsate {
    0% {
      transform: scale(0.8);
      fill: rgba(255,255,255,0);
    }
    25% {
      transform: scale(1);
      fill: rgba(255,255,255,0.5);
    }
    50% {
      transform: scale(0.8);
      fill: rgba(255,255,255,0);
    }
    75% {
      transform: scale(1);
      fill: rgba(255,255,255,0.5);
    }
    100% {
      transform: scale(0.8);
      fill: rgba(255,255,255,0);
    }
 

  
  }
`

 












