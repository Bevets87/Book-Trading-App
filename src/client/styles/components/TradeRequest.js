import styled from 'styled-components'
import ButtonBase from '../base/Button'
import { BookOpen } from 'styled-icons/feather/BookOpen.cjs'
import { serif } from '../typography'
import { red, white, black } from '../colors'
import media from '../media'

export const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  
  z-index: 1000000;
  background: ${red};
  opacity: 0.98;
  width: 100%;
  min-height: 100%;
  display: block;
  text-align: center;
  overflow-y: scroll;
  -webkit-overflow-scrolling: touch;
  &::-webkit-scrollbar {
    display: none;
  }
`


export const Header = styled.div`
  height: auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  background: ${red};
  margin: 0 auto;

 
 
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
  margin: 0 auto;
 
`



export const Box = styled.div`
  display: flex;
  margin: 2rem auto;
  width: 80%;
  height: auto;

`
export const BookIconContainer = styled(ButtonBase)`
  background: rgba(0,0,0,0);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 10rem;
  width: auto;
  font-size: 5rem;
  font-weight: bold;
  color: ${white};
  ${media.tablet`
    font-size: 4rem;
    height: 9rem;
  `}
  ${media.phone`
    font-size: 3rem;
    height: 8rem;
  `}

`

export const BlackBookIcon = styled(BookOpen)`
  stroke: ${black};
  height: 10rem;
  width: auto;
  fill: rgba(0,0,0,0);
  transition: all 0.25s;
  ${BookIconContainer}:hover & {
    fill: ${white};
    
  
  }
  ${media.tablet`
    height: 9rem;
  `}
  ${media.phone`
    height: 8rem;
  `}
`



