import React from 'react'
import UniversalComponent from '../Universal'

const SignInPage = (props) => {
  return (
    <div>
      <UniversalComponent page={'SignIn'} {...props} />
    </div>
  )
}

export default SignInPage 