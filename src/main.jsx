import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { modifier } from '../reducer/store'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

const store = createStore(modifier)

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)