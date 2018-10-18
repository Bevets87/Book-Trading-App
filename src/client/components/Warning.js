import React from 'react'
import { object, func, string } from 'prop-types'
import parseError from '../utils/parseError'

import { Container, Text, Button } from '../styles/components/Warning'

const Warning = ({ error, reset, width = null, height = null }) => {
  return(
    <Container width={width} height={height}>
      <Text>{parseError(error)}</Text>
      <Button onClick={() => { reset() }}>Got It!</Button>
    </Container>
  )
}

Warning.propTypes = {
  error: object,
  reset: func,
  width: string,
  height: string   
}

export default Warning 



