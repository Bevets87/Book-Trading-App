import styled from 'styled-components'
import ButtonBase from '../base/Button'
import { red, white, black } from '../colors'
import media from '../media'
import { ArrowDropUp } from 'styled-icons/material/ArrowDropUp.cjs'
import { ArrowDropDown } from 'styled-icons/material/ArrowDropDown.cjs'


export const Container = styled.div`
  display: none;
  ${media.tablet`
    position: relative;
    display: block;
    text-align: center;
    width: 100%;
    height: auto;
    background: ${white};
  `}

`



export const Button = styled(ButtonBase)`
  background: ${white};
  width: 100%;
  height: 5rem;
  color: ${red};
  font-size: 2.5rem;
  border: 0.2rem solid blue;
  transition: all 0.25s;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center; 
  border: 0.1rem solid ${black};
  
  &:hover {
    background: ${red};
    color: ${white};
    box-shadow: inset 0 0 0 0.15rem ${black};
  }
 
`

export const Menu = styled.div`
  display: none;
  ${media.tablet`
    position: absolute;
    top: 5rem;
    left: 0;
    z-index: 10;
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
  `}
`

export const DropDownIcon = styled(ArrowDropDown)`
  height: 100%;
  width: auto;
`
export const DropUpIcon = styled(ArrowDropUp)`
  height: 100%;
  width: auto;
`

export const Span = styled.span`
  height: 100%;
  width: 100%;
  font-size: 3rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  


`



