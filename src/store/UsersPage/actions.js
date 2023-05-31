import { UsersService } from './users-service'

export const FETCH_USERS = 'FETCH_USERS'
export const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS'
export const FETCH_USERS_FAILURE = 'FETCH_USERS_FAILURE' // это для ошибки

export const fetchUsers = () => ({ type: FETCH_USERS })
export const fetchUsersSuccess = (payload) => ({
  type: FETCH_USERS_SUCCESS,
  payload
})
export const fetchUsersFailure = (payload) => ({
  type: FETCH_USERS_FAILURE,
  payload
})

export const featchUsersAsync = () => async (dispatch) => {
  try {
    dispatch(fetchUsers())
    const { data } = await UsersService.getUsers()
    dispatch(fetchUsersSuccess(data))
  } catch (error) {
    console.error(error)
    dispatch(fetchUsersFailure('Ошибка!'))
  }
}
