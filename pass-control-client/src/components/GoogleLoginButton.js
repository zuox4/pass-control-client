import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google'
import axios from 'axios'

const GoogleLoginButton = () => {
	const handleSuccess = async credentialResponse => {
		try {
			const response = await axios.post(
				'http://localhost:8000/api/auth/google',
				{
					token: credentialResponse.credential,
				}
			)

			// Сохраняем токен в localStorage
			localStorage.setItem('access_token', response.data.access_token)
			console.log('Успешный вход!')
		} catch (error) {
			console.error('Ошибка входа:', error)
		}
	}

	const handleError = () => {
		console.error('Не удалось выполнить вход')
	}

	return (
		<GoogleOAuthProvider clientId='ВАШ_GOOGLE_CLIENT_ID'>
			<GoogleLogin onSuccess={handleSuccess} onError={handleError} />
		</GoogleOAuthProvider>
	)
}

export default GoogleLoginButton
