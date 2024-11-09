import Gallery from '@/pages/Gallery'
import Homepage from '@/pages/Homepage'
import Todos from '@/pages/Todos'
import UserProfile from '@/pages/UserProfile'
import Users from '@/pages/Users'
import React from 'react'
import { GALLERY_PATH, MAIN_PATH, PROFILE_PATH, TODOS_PATH, USERS_PATH } from './routes.js'

export const routes = [
  { path: MAIN_PATH, element: React.createElement(Homepage) },
  { path: PROFILE_PATH, element: React.createElement(UserProfile) },
  { path: USERS_PATH, element: React.createElement(Users) },
  { path: GALLERY_PATH, element: React.createElement(Gallery) },
  { path: TODOS_PATH, element: React.createElement(Todos) },
]
