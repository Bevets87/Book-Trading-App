import React, { Component } from 'react'

const withObservable = (WrappedComponent) => {
  class ObservableContainer extends Component {
    channels = {}
    subscribe = (channel, handler) => {
      this.channels[channel] = handler 
    }
    unsubscribe = (channel) => {
      delete this.channels[channel]
    }
    notify = (channel, ...args) => {
      if (this.channels[channel]) {
        this.channels[channel](...args)
      }
    }
    render() {
      return( 
        <WrappedComponent 
          subscribe={this.subscribe}
          unsubscribe={this.unsubscribe}
          notify={this.notify}
          {...this.props}
        />
      ) 
    }
  }
  return ObservableContainer 
}

export default withObservable 