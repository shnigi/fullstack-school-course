import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import anecdoteReducer from './reducers/anecdoteReducer'
import notificationReducer, {notificationChange} from './reducers/notificationReducer'

const reducer = combineReducers({
  anecDotes: anecdoteReducer,
  notification: notificationReducer
})

const store = createStore(reducer)

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
