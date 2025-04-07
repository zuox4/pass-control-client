import logo from '../../assets/logo.svg'
export default function Login() {
	const nameApp = 'Многофункциональная система пропускного контроля'
	return (
		<div className='px-2'>
			<div className='flex flex-col gap-1'>
				{nameApp.split(' ').map(str => (
					<div key={str} className='flex flex-row text-2xl text-main '>
						<span className='font-black uppercase'>{str[0]}</span>
						<span>{str.slice(1, str.length)}</span>
					</div>
				))}
			</div>

			<div className='flex flex-col items-center'>
				<img src={logo} alt='logo' />
			</div>
			<button className='px-4 py-2 bg-red'>Войти с Google</button>
		</div>
	)
}
