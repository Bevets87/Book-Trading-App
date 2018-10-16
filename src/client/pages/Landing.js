import React from 'react'
import UniversalComponent from '../Universal'

const LandingPage = (props) => {
  return (
    <div>
      <UniversalComponent page={'Landing'}
      {...props} />
    </div>
  )
}


export default LandingPage
