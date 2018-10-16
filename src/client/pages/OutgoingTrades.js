import React from 'react'
import UniversalComponent from '../Universal'

const OutgoingTradesPage = (props) => {
  return (
    <div>
      <UniversalComponent
        page={'OutgoingTrades'}
        {...props}
      />
    </div>
  )
}

export default OutgoingTradesPage 