import styled from 'styled-components'
import ButtonBase from '../base/Button'
import { ArrowRight } from 'styled-icons/feather/ArrowRight.cjs'
import { ArrowLeft } from 'styled-icons/feather/ArrowLeft.cjs'
import { red, white, black } from '../colors'
import media from '../media'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 0;
  margin: 0 auto;
  width: 80%;
  height: 100%;



  ${media.tablet`
    width: 90%;
  `}
  ${media.phone`
    width: 95%;
  `}
  

`

export const Body = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  align-items: space-between;
  width: 100%;
  height: auto;
  
`

export const Footer = styled.div`
  width: 100%;
  height: auto;
  margin-top: 2rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-end; 
  
  
`


export const LeftButton = styled(ButtonBase)`

  background: ${white};
  width: 9rem;
  height: 9rem;
  border: 0.25rem solid ${black};
  transition: all 0.25s;
  &:hover {
    background: ${red};
    color: ${white};
    box-shadow: inset 0 0 0 0.05rem ${black};
  }

`


export const RightButton = styled(ButtonBase)`

  background: ${white};
  width: 9rem;
  height: 9rem;
  border: 0.25rem solid ${black};
  transition: all 0.25s;
  &:hover {
    background: ${red};
    color: ${white};
    box-shadow: inset 0 0 0 0.05rem ${black};
  }
 
`

export const RightArrowIcon = styled(ArrowRight)`
  color: ${red};
  transition: all 0.2s;
  ${RightButton}:hover & {
    color: ${white};
  }
`

export const LeftArrowIcon = styled(ArrowLeft)`
  color: ${red};
  transition: all 0.2s;
  ${LeftButton}:hover & {
    color: ${white};
  }
`



