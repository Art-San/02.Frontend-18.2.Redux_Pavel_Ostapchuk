import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

const { combineReducers, createStore, applyMiddleware } = require('redux')

const rootReducer = combineReducers({})

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
)
