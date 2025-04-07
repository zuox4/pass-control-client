import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { router } from './router/router'
import './fonts.css'
import { Outlet } from 'react-router'
function App() {
	return <Outlet />
}

export default App
