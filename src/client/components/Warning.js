import React from 'react'
import { object, func } from 'prop-types'
import parseError from '../utils/parseError'

import { Container, Text, Button } from '../styles/components/Warning'

const Warning = ({ error, reset }) => {
  return(
    <Container>
      <Text>{parseError(error)}</Text>
      <Button onClick={() => { reset() }}>Got It!</Button>
    </Container>
  )
}

Warning.propTypes = {
  error: object,
  reset: func  
}

export default Warning 



