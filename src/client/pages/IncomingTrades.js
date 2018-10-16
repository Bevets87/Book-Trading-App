import React from 'react'
import UniversalComponent from '../Universal'

const IncomingTradesPage = (props) => {
  return (
    <div>
      <UniversalComponent
        page={'IncomingTrades'}
        {...props}
      />
    </div>
  )
}

export default IncomingTradesPage 

