import Homepage from '@/pages/Homepage'
import Photos from '@/pages/Photos'
import Posts from '@/pages/Posts'
import Todos from '@/pages/Todos'
import UserProfile from '@/pages/UserProfile'
import React from 'react'

export const routes = [
  { path: '/', element: React.createElement(Homepage) },
  { path: '/profile', element: React.createElement(UserProfile) },
  { path: '/posts', element: React.createElement(Posts) },
  { path: '/photos', element: React.createElement(Photos) },
  { path: '/todos', element: React.createElement(Todos) },
]
