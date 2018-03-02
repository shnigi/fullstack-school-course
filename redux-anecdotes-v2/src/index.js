import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import store from './store'
import { Provider } from 'react-redux'
import {notificationChange} from './reducers/notificationReducer'


console.log(store.getState())
store.dispatch(notificationChange('KEWL'))
console.log(store.getState())

const render = () => {
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root'),
  )
}

render()
store.subscribe(render)
