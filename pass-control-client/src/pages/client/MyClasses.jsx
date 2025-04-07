import { Link, replace, useNavigate } from 'react-router'

export default function MyClasses() {
	const navigate = useNavigate()
	return (
		<>
			<span className='uppercase' onClick={() => navigate(-1)}>
				Назад
			</span>
			<div>Мои классы</div>
		</>
	)
}
