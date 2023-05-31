// redux_toolkit_createAsyncThunk

import { createSlice } from '@reduxjs/toolkit'
import { featchUsersAsync } from './actions'
const initialState = {
  userData: [],
  loading: false,
  error: null
}
// все асинхронные акшены должны быть сдесь
export const UsersSlice = createSlice({
  name: 'Users',
  initialState,
  extraReducers: {
    // все асинхронные акшены должны быть сдесь
    [featchUsersAsync.pending.type]: (state) => {
      state.loading = true
    },
    [featchUsersAsync.fulfilled.type]: (state, { payload }) => {
      state.loading = false
      state.userData = payload
    },
    [featchUsersAsync.rejected]: (state, { payload }) => {
      state.loading = false
      state.error = payload
    }
  }
})

//=====================================================
// если синхроные акшены то так
// Init Redux-toolkit
// import { createSlice } from '@reduxjs/toolkit'
// const initialState = {
//   userData: [],
//   loading: false,
//   error: null
// }

// export const UsersSlice = createSlice({
//   name: 'Users',
//   initialState,
//   reducers: { // если синхроные акшены то так
//     fetchUsers(state) {
//       state.loading = true
//     },
//     fetchUsersSuccess(state, { payload }) {
//       state.loading = false
//       state.userData = payload
//     },
//     fetchUsersFailure(state, { payload }) {
//       state.loading = false
//       state.error = payload
//     }
//   }
// })

// Init Vanilla Redux
// import {
//   FETCH_USERS,
//   FETCH_USERS_FAILURE,
//   FETCH_USERS_SUCCESS
// } from './actions'

// const initialState = {
//   userData: [],
//   loading: false,
//   error: null
// }

// export const UsersReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case FETCH_USERS:
//       return { ...state, loading: true }
//     case FETCH_USERS_SUCCESS:
//       return { ...state, loading: false, userData: action.payload }
//     case FETCH_USERS_FAILURE:
//       return { ...state, loading: false, error: action.payload }
//     default:
//       return state
//   }
// }
