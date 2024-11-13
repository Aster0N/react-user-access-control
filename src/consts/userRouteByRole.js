import {
  adminRoutes,
  galleryManagerRoutes,
  todosManagerRoutes,
  userManagerRoutes,
} from '@/router/index.js'

export const userRouteByRole = {
	admin: adminRoutes,
	'user-manager': userManagerRoutes,
	'gallery-manager': galleryManagerRoutes,
	'todos-manager': todosManagerRoutes,
}