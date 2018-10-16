import React from 'react'
import { string, func, object } from 'prop-types'
import parseDate from '../utils/parseDate'

import {
  Container,
  Column,
  Title,
  Button,
  Row, 
  Buttons,
  CancelBox,
  CheckBox,
  HiLite,
  Underline
} from '../styles/components/Trade'



const DetailsBox = ({ createdAt, from, bookToGet, bookToGive }) => {
  return (
    <Column>
      <Row>
        <Title>Date: {createdAt}</Title>
      </Row>
      <Row>
        <Title>From: <Underline>{from.username}</Underline></Title>
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
  from: object,
  bookToGive: object,
  bookToGet: object
}


const ButtonsBox = ({ acceptTrade, declineTrade, _id }) => {
  return(
    <Buttons>
      <Button onClick={() => { acceptTrade(_id) }}>
        <CheckBox />
      </Button>
      <Button onClick={() => { declineTrade(_id) }}>
        <CancelBox />
      </Button>
    </Buttons>
  )
}

ButtonsBox.propTypes = {
  _id: string,
  acceptTrade: func,
  declineTrade: func 
}

const IncomingTrade = ({ createdAt, from, bookToGive, bookToGet, acceptTrade, declineTrade, _id }) => {
  return (
    <Container>
      <DetailsBox
        createdAt={parseDate(createdAt)}
        from={from}
        bookToGet={bookToGet}
        bookToGive={bookToGive}
      />
     
      <ButtonsBox
        _id={_id} 
        acceptTrade={acceptTrade}
        declineTrade={declineTrade}
      />
    </Container>
  )
}

IncomingTrade.propTypes = {
  _id: string,
  acceptTrade: func,
  declineTrade: func,
  createdAt: string,
  from: object,
  bookToGive: object,
  bookToGet: object
}

export default IncomingTrade 