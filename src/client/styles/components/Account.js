import styled from 'styled-components'
import { red, white, black, opaque } from '../colors'
import ButtonBase from '../base/Button'
import media from '../media'
import { UserCog } from 'styled-icons/fa-solid/UserCog.cjs'
import { Edit } from 'styled-icons/fa-regular/Edit.cjs'
import { LongArrowAltLeft } from 'styled-icons/fa-solid/LongArrowAltLeft.cjs'
import { LongArrowAltRight } from 'styled-icons/fa-solid/LongArrowAltRight.cjs'
import { Search } from 'styled-icons/feather/Search.cjs'
import { Book } from 'styled-icons/fa-solid/Book.cjs'
import { Lock } from 'styled-icons/material/Lock.cjs' 

export const OuterContainer = styled.div`
  padding-top: 7rem;
  overflow-y: scroll;
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  background: ${opaque};
  
  box-sizing: border-box;
  overflow-x: hidden;
   -ms-overflow-style: none;  // IE 10+
 
  &::-webkit-scrollbar {
    display: none;
  }
  ${media.tablet`
    background: ${red};
  `}
`

export const InnerContainer = styled.div`
  width: 90%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  

  ${media.tablet`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
  `}

  

`
export const DesktopMenu = styled.div`
  width: 30rem;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background: ${red};
  border-right: 0.25rem solid ${black};
  border-left: 0.25rem solid ${black};
  ${media.tablet`
    display: none;
  `}

`
export const DesktopMenuItem = styled(ButtonBase)`
  background: ${red};
  width: 100%;
  height: 5rem;
  color: ${white};
  font-size: 2rem;
  border-top: 0.25rem solid ${black};
  
  transition: all 0.25s;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  &:last-child {
    border-bottom: 0.25rem solid ${black};
  } 
  &:hover {
    background: ${white};
    color: ${red};
    box-shadow: inset 0 0 0 0.15rem ${black};
  }
`
export const DesktopMenuAvatar = styled(ButtonBase)`
  background: ${red};
  color: ${white};
  font-size: 3rem;
  width: 100%;
  height: 10rem;
  border: 0.1rem solid ${black};
  cursor: auto;

`

export const UserIcon = styled(UserCog)`
  height: 10rem;
  width: auto;
  display: block;
`
export const EditIcon = styled(Edit)`
  display: block;
  height: 100%;
  width: auto; 
`
export const SearchIcon = styled(Search)`
  height: 100%;
  width: auto;
  display: block; 
`

export const OutgoingIcon = styled(LongArrowAltLeft)`
  height: 100%;
  width: auto;
  display: block;
`
export const IncomingIcon = styled(LongArrowAltRight)`
  height: 100%;
  width: auto;
  display: block;
`

export const BookIcon = styled(Book)`
  height: 100%;
  width: auto;
  display: block;
`
export const LockIcon = styled(Lock)`
  height: 100%;
  width: auto;
  display: block;
`

export const Span = styled.span`
  color: inherit;
  font-size: inherit;
  height: 100%;
  width: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

`

export const PageContainer = styled.div`
  display: block;
  width: 60%;
  max-height: 100%;
  background: ${red};
  overflow-x: hidden;
  -ms-overflow-style: none;  // IE 10+
 
  &::-webkit-scrollbar {
    display: none;
  }
  overflow-y: scroll;
  ${media.tablet`
    width: 100%;
    height: 90%;
    
  `}
  

`

