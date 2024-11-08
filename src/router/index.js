import Gallery from '@/pages/Gallery'
import Homepage from '@/pages/Homepage'
import Todos from '@/pages/Todos'
import UserProfile from '@/pages/UserProfile'
import Users from '@/pages/Users'
import React from 'react'

export const routes = [
  { path: '/', element: React.createElement(Homepage) },
  { path: '/profile', element: React.createElement(UserProfile) },
  { path: '/users', element: React.createElement(Users) },
  { path: '/gallery', element: React.createElement(Gallery) },
  { path: '/todos', element: React.createElement(Todos) },
]
