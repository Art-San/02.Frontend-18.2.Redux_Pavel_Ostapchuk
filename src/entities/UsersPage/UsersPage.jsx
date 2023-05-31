import { useState } from 'react'
import { useEffect } from 'react'
import { $api } from '../../api/axios-instance'

const UsersPage = () => {
  const [usersList, setUsersList] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  console.log(usersList)
  const getUsers = async () => {
    try {
      setIsLoading(true)
      const { data } = await $api.get('/users')
      setUsersList(data)
      setIsLoading(false)
    } catch (error) {
      setIsLoading(false)
      console.error('Ошибка:', error.message)
    }
  }
  useEffect(() => {
    getUsers()
  }, [])
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
