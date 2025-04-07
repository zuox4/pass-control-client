import {
	BrowserRouter,
	createBrowserRouter,
	RouterProvider,
} from 'react-router'
import App from '../App'
import ClientLayout from '../pages/client/ClientLayout'

import Home from '../pages/client/Home'
import Login from '../pages/client/Login'
import MyClasses from '../pages/client/MyClasses'

export const router = createBrowserRouter([
	{
		path: '/',
		Component: App,
		children: [
			{
				Component: ClientLayout,
				children: [
					{ path: 'home', Component: Home },
					{ path: 'my-classes', Component: MyClasses },
				],
			},
			{ path: 'login', Component: Login },
		],
	},
])
