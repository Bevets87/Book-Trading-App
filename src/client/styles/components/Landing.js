import styled from 'styled-components'
import ButtonBase from '../base/Button'
import { opaque, red, white } from '../colors'
import { serif } from '../typography'
import media from '../media'

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  background: ${opaque};
  background-attachment: fixed;
  background-size: contain;
  background-origin: content-box;
  background-repeat: none;
  
`
export const Overlay = styled.div`
  height: 100vh;
  width: 100vw;
  background: ${opaque};
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
`
export const DesktopText = styled.h1`
  font-size: 8rem;
  color: ${red};
  font-family: ${serif};
  ${media.desktop`
    display: none;
  `}
`
export const TabletText = styled.h1`
  display: none;
  ${media.desktop`
    display: block;
    font-family: ${serif};
    font-size: 8rem;
    color: ${red};
  `}
  ${media.tablet`
    font-size: 7rem;
  `}
  ${media.phone`
    font-size: 6rem;
  `}
`
export const Button = styled(ButtonBase)`
  background: ${white};
  color: ${red};
  font-size: 4rem;
  width: auto;
  height: auto;
  margin: 0 auto;
  padding: 2rem;
  border: 0.2rem solid ${red} !important;
  transition: all 0.25s;
  &:hover {
    background: ${red};
    color: ${white};
    box-shadow: inset 0 0 0 0.3rem ${red};
  }
  ${media.tablet`
    font-size: 4rem;
  `}
  ${media.phone`
    font-size: 3.5rem;
  `}
`