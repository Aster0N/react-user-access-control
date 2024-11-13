import Gallery from '@/pages/Gallery'
import Homepage from '@/pages/Homepage'
import Todos from '@/pages/Todos'
import UserProfile from '@/pages/UserProfile'
import Users from '@/pages/Users'
import React from 'react'
import { GALLERY_PATH, MAIN_PATH, PROFILE_PATH, TODOS_PATH, USERS_PATH } from './routes.js'

export const adminRoutes = [
  { path: MAIN_PATH, element: React.createElement(Homepage) },
  { path: PROFILE_PATH, element: React.createElement(UserProfile) },
  { path: USERS_PATH, element: React.createElement(Users) },
  { path: GALLERY_PATH, element: React.createElement(Gallery) },
  { path: TODOS_PATH, element: React.createElement(Todos) },
]
export const userManagerRoutes = [
  { path: MAIN_PATH, element: React.createElement(Homepage) },
  { path: PROFILE_PATH, element: React.createElement(UserProfile) },
  { path: USERS_PATH, element: React.createElement(Users) },
]
export const galleryManagerRoutes = [
  { path: MAIN_PATH, element: React.createElement(Homepage) },
  { path: PROFILE_PATH, element: React.createElement(UserProfile) },
  { path: GALLERY_PATH, element: React.createElement(Gallery) },
]
export const todosManagerRoutes = [
  { path: MAIN_PATH, element: React.createElement(Homepage) },
  { path: PROFILE_PATH, element: React.createElement(UserProfile) },
  { path: TODOS_PATH, element: React.createElement(Todos) },
]

export const unauthRouts = [
  { path: MAIN_PATH, element: React.createElement(Homepage) },
  { path: PROFILE_PATH, element: React.createElement(UserProfile) },
]
