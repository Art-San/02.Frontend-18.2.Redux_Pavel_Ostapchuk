import { configureStore } from '@reduxjs/toolkit'
import { UsersSlice } from './UsersPage/reducer'
// import { composeWithDevTools } from 'redux-devtools-extension'
// import thunk from 'redux-thunk'
// import { UsersReducer } from './UsersPage/reducer'

// const { combineReducers, createStore, applyMiddleware } = require('redux')
const { combineReducers } = require('redux')

// Init Vanilla Redux
// const rootReducer = combineReducers({
//   usersPage: UsersReducer
// })

// export const store = createStore(
//   rootReducer,
//   composeWithDevTools(applyMiddleware(thunk))
// )

const rootReducer = combineReducers({
  usersPage: UsersSlice.reducer
})

export const store = configureStore({
  reducer: rootReducer
})
