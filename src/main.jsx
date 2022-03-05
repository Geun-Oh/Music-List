import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { modifier } from '../reducer/store'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import createSagaMiddleware from 'redux-saga'
import { modvisible } from '../reducer/store'

const saga = createSagaMiddleware()
const store = createStore(modifier, applyMiddleware(thunk, saga))
saga.run(modvisible)

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)