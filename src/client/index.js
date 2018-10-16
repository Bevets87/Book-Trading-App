import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import createStore from './redux/createStore'

import App from './App'

const store = createStore(window.REDUX_STATE)

ReactDOM.hydrate(
  <Provider store={store} >
    <BrowserRouter>
      <App store={store}/>
    </BrowserRouter>
  </Provider>, document.getElementById('app')
)





