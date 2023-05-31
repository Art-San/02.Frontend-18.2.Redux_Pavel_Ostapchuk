import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Layout from './common/Layout/Layout'
import TodosPage from './entities/TodosPage/TodosPage'
import UsersPage from './entities/UsersPage/UsersPage'
import './styles/style.scss'

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="users_page" element={<UsersPage />} />
        <Route path="todos_page" element={<TodosPage />} />
      </Routes>
    </Layout>
  )
}

export default App
