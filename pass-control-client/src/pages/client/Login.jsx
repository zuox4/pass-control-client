import logo from '../../assets/logo.svg'
export default function Login() {
	const nameApp = 'Многофункциональная система пропускного контроля'

	const loginWithGoogle = () => {
		
	}

	return (
		<div className='px-2 mt-10'>
			<div className='flex flex-col gap-1'>
				{nameApp.split(' ').map(str => (
					<div key={str} className='flex flex-row text-[25px] text-main '>
						<span className='font-black uppercase'>{str[0]}</span>
						<span className='uppercase'>{str.slice(1, str.length)}</span>
					</div>
				))}
			</div>

			<div className='flex flex-col items-center mt-10'>
				<img src={logo} alt='logo' />
			</div>
			<div className='flex flex-col items-center mt-10'>
				<button className='px-4 py-2 bg-google rounded-[5px] text-white'>
					Войти с Google
				</button>
			</div>
		</div>
	)
}
