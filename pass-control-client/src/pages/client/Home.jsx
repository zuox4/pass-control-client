import { NavLink } from 'react-router'

export default function Home() {
	return (
		<div>
			<nav>
				<NavLink to={'/my-classes'} replace={false}>
					Мои классы
				</NavLink>
			</nav>
		</div>
	)
}
