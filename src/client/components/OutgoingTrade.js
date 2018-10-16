import React from 'react'
import { string, func, object } from 'prop-types'
import parseDate from '../utils/parseDate'

import {
  Container,
  Column,
  Row,
  Button,
  CancelBox,
  Buttons,
  Title,
  Italic,
  Underline,
  HiLite
} from '../styles/components/Trade'


const DetailsBox = ({ status, createdAt, to, bookToGet, bookToGive }) => {
  return(
    <Column>
      <Row>
        <Title>Date: {createdAt}</Title>
      </Row>
      <Row>
        <Title>Status: <Italic>{status}</Italic></Title>
      </Row>
      <Row>
        <Title>To: <Underline>{to.username}</Underline></Title>
      </Row>
      <Row>
        <Title>Requesting: <HiLite>{bookToGet.title}</HiLite></Title>
      </Row>
       <Row>
        <Title>Trading: <HiLite>{bookToGive.title}</HiLite></Title>
      </Row>
    </Column>
  )
}

DetailsBox.propTypes = {
  status: string,
  createdAt: string,
  to: object,
  bookToGet: object,
  bookToGive: object
}



const ButtonsBox = ({ removeTrade, _id }) => {
  return (
    <Buttons>
      <Button onClick={() => { removeTrade(_id) }}>
        <CancelBox />
      </Button>
    </Buttons>
  )
}

ButtonsBox.propTypes = {
  _id: string,
  removeTrade: func 
}



const OutgoingTrade = ({ createdAt, to, bookToGive, bookToGet, removeTrade, _id, status }) => {
  return(
    <Container>
      <DetailsBox 
        status={status}
        createdAt={parseDate(createdAt)}
        to={to}
        bookToGet={bookToGet}
        bookToGive={bookToGive}
      />
      <ButtonsBox
        _id={_id}
        removeTrade={removeTrade}
      />
    </Container>
  )
}

OutgoingTrade.propTypes = {
  createdAt: string,
  to: object,
  bookToGive: object,
  bookToGet: object,
  removeTrade: func,
  _id: string,
  status: string   
}


export default OutgoingTrade 