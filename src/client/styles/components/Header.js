import styled from 'styled-components'
import NavBase from '../base/Nav'
import ButtonBase from '../base/Button'
import { BookOpen } from 'styled-icons/feather/BookOpen.cjs'
import { Settings } from 'styled-icons/feather/Settings.cjs'
import { XSquare } from 'styled-icons/feather/XSquare.cjs'
import { red, white, black } from '../colors'
import { serif } from '../typography'
import media from '../media'


export const Nav = styled(NavBase)`
  position: fixed;
  z-index: 1000;
  justify-content: space-around;
  align-items: center;
  background: ${white};
  height: 7rem;
  border-bottom: 0.2rem solid ${black};
  ${media.tablet`
    justify-content: space-between;
  `}
`

export const Button = styled(ButtonBase)`
  background: ${white};
  border: 0.25rem solid ${black} !important;
  color: ${red};
  font-size: 4rem;
  margin-right: 0.5rem;
  transition: all 0.25s;
  &:hover {
    background: ${red};
    color: ${white};
    box-shadow: inset 0 0 0 0.05rem ${black};
  }
  
`

export const TabletMenu = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  width: 30%;
  height: 7rem;

  ${media.tablet`
    display: none;
  `}
`

export const TabletMenuItem = styled(ButtonBase)`
  margin: 2rem;
  background: rgba(0,0,0,0);
  color: ${red};
  font-size: 3rem;
  font-weight: bolder;
  font-family: ${serif};
  transition: all 0.25s;
  &:hover {
    color: ${black};
  }
`



export const LineBreak = styled.hr`
  height: 0.1rem;
  width: 50%;
  background: ${white};
`

export const BookIconContainer = styled(ButtonBase)`
  background: rgba(0,0,0,0);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 7rem;
  width: auto;
`

export const PhoneMenuContainer = styled.div`
    display: none;
  ${media.tablet`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    min-width: 100vw;
    min-height: 100vh;
    background: ${black};
    opacity: 0.95;
  `}
  
`
export const PhoneMenuHeader = styled.div`
  height: 7rem;
  width: 100%;
  text-align: right;
`

export const PhoneMenuHeaderItem = styled(ButtonBase)`
  
  width: auto;
  height: 7rem;
  background: rgba(0,0,0,0);
`
export const PhoneMenuTitle = styled(ButtonBase)`
  color: ${white};
  font-size: 5rem;
  background: rgba(0,0,0,0);
  transition: all 0.25s;
  &:hover {
    color: ${red};
  }
`

export const PhoneMenuItem = styled(ButtonBase)`
  color: ${white};
  font-size: 3rem;
  background: rgba(0,0,0,0);
  margin-top: 2rem;
  transition: all 0.25s;
  &:hover {
    color: ${red};
  }
  
 
`

export const RedBookIcon = styled(BookOpen)`
  stroke: ${red};
  height: 7rem;
  width: auto;
  fill: rgba(0,0,0,0);
  transition: fill 0.25s;
  ${BookIconContainer}:hover & {
    fill: ${black};
  }
  ${PhoneMenuItem}:hover & {
    fill: ${white};
  }
`

export const BlackBookIcon = styled(BookOpen)`
  stroke: ${black};
  height: 7rem;
  width: auto;
  fill: rgba(0,0,0,0);
  transition: all 0.25s;
  ${BookIconContainer}:hover & {
    fill: ${red};
    
  
  }
`
export const BookIconTitle = styled.span`
  font-size: 5rem;
  color: ${red};
  font-family: ${serif};
  ${media.desktop`
    display: none;
  `}
`


export const SettingsIconContainer = styled(ButtonBase)`
  display: none;
  ${media.tablet`
    display: flex;
    background: ${white};
    width: auto;
    height: 6.5rem;
  `}
`

export const SettingsIcon = styled(Settings)`
  stroke: ${red};
  fill: rgba(0,0,0,0);
  height: 6.5rem;
  width: auto;
  transition: fill 0.25s;
  ${SettingsIconContainer}:hover & {
    fill: ${red};
  }
`
export const CloseIcon = styled(XSquare)`
  stroke: ${red};
  fill: rgba(0,0,0,0);
  height: 7rem;
  width: auto;
  transition: fill 0.25s;
  ${PhoneMenuHeaderItem}:hover & {
    fill: ${white};
  }
`





