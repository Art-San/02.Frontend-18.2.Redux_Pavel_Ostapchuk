import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import { UsersReducer } from './UsersPage/reducer'

const { combineReducers, createStore, applyMiddleware } = require('redux')

const rootReducer = combineReducers({
  usersPage: UsersReducer
})

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
)
