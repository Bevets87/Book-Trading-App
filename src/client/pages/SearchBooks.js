import React from 'react'
import UniversalComponent from '../Universal'

const SearchBooksPage = (props) => {
  return (
    <div>
      <UniversalComponent 
        page={'SearchBooks'}
        {...props} 
      />
    </div>
  )
}

export default SearchBooksPage 
