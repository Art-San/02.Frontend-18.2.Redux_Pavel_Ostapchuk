// import { useState, useEffect } from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
// import { $api } from '../../api/axios-instance'
import { featchUsersAsync } from '../../store/UsersPage/actions'
import { getUsersStateSelector } from '../../store/UsersPage/selectors'

const UsersPage = () => {
  // withour redux
  // const [usersList, setUsersList] = useState([])
  // const [isLoading, setIsLoading] = useState(false)
  // console.log(usersList)
  // const getUsers = async () => {
  //   try {
  //     setIsLoading(true)
  //     const { data } = await $api.get('/users')
  //     setUsersList(data)
  //     setIsLoading(false)
  //   } catch (error) {
  //     setIsLoading(false)
  //     console.error('Ошибка:', error.message)
  //   }
  // }
  // useEffect(() => {
  //   getUsers()
  // }, [])

  // Vanilla Redux
  const dispatch = useDispatch()
  const { userData: usersList, loading: isLoading } = useSelector(
    getUsersStateSelector
  )

  useEffect(() => {
    dispatch(featchUsersAsync())
  }, [dispatch])

  return isLoading ? (
    <div>Загрузка...</div>
  ) : (
    <div>
      {usersList.map((user) => (
        <div key={user.id}>{user.name}</div>
      ))}
    </div>
  )
}

export default UsersPage
