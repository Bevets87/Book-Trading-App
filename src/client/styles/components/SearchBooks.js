import styled from 'styled-components'
import ButtonBase from '../base/Button'
import { red, white, black } from '../colors'
import { serif } from '../typography'
import media from '../media'

export const Input = styled.input`
  font-size: 2rem;
  background: ${white};
  color: ${red};
  height: 4rem;
  width: 100%;
  text-align: right;
  font-weight: bold;
  &::placeholder {
    color: ${red};
    font-weight: bold;
  }
`

export const Button = styled(ButtonBase)`
  background: ${white};
  color: ${red};
  font-size: 3rem;
  width: 50%;
  height: 4rem;
  border: 0.2rem solid ${black};
  transition: all 0.25s;
  
  &:hover {
    background: ${red};
    color: ${white};
  }
  ${media.tablet`
    width: 90%;
  
    margin-top: 0;
  `}
  
 
`

export const SearchBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background: ${red};
  border: 0.2rem solid ${black};
  border-radius: 0.5rem;
  height: auto;
  width: 80%;
  margin: 0 auto;
  ${media.tablet`
    margin-top: 2rem;
    width: 95%;
  `}
`

export const ButtonsBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: auto;
  width: 100%;
  
`

export const BookButtons = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 10rem;
  width: 100%;
  
`

export const ResultsBox = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  margin: 2rem auto;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  

`
export const BookBox = styled.div`
  display: block;
  width: 80%;
  height: auto;
  text-align: center;


`



export const BookCover = styled.img`
  height: 15rem;
  width: 10rem;
`

export const BookTitle = styled.h1`
  font-size: 3rem;
  color: ${white};
  font-family: ${serif};
  width: 50%;
  margin: 0.5rem auto;
  text-align: center;
  ${media.tablet`
    font-size: 2.5rem;
  `}
`

export const BookAuthor = styled.h1`
  font-size: 2.5rem;
  color: ${black};
  font-family: ${serif};
  width: 50%;
  margin: 0.5rem auto;
  text-align: center;
  ${media.tablet`
    font-size: 2rem;
  `}
`


export const Paragraph = styled.p`
  font-size: 3rem;
  color: ${white};
  font-family: ${serif};
  text-align: center;
  font-weight: bold;
  ${media.tablet`
    margin-top: 2rem;
    width: 95%;
    font-size: 2.5rem;
  `}
  
`



