import React from 'react'
import UniversalComponent from '../Universal'


const OwnedBooksPage = (props) => {
  return (
    <div>
      <UniversalComponent 
        page={'OwnedBooks'}
        {...props} 
      />
    </div>
  )
}

export default OwnedBooksPage
