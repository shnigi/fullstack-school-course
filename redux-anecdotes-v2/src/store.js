import { createStore, combineReducers } from 'redux'
import notificationReducer from './reducers/notificationReducer'
import anecdoteReducer from './reducers/anecdoteReducer'
import filterReducer from './reducers/filterReducer'

const reducer = combineReducers({
  anecDotes: anecdoteReducer,
  notification: notificationReducer,
  filter: filterReducer
})

const store = createStore(reducer)

export default store
