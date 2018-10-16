import React from 'react'
import UniversalComponent from '../Universal'

const UnownedBooksPage = (props) => {
  return (
    <div>
      <UniversalComponent page={'UnownedBooks'} {...props} />
    </div>
  )
}



export default UnownedBooksPage