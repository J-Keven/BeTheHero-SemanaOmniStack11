import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { FiLogIn } from 'react-icons/fi'
import './style.css'
import heroImg from '../../assets/heroes.png'
import logoImg from '../../assets/logo.svg'
import api from '../../services/api'

export default function Login() {

	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	const [ErrorPassOrEmail, setError] = useState(null)
	const history = useHistory()
	async function handleLoign(e) {
		e.preventDefault()

		try {

			const response = await api.post('/login', { email, password })
			localStorage.setItem('ongToken', response.data.token)
			localStorage.setItem('ongName', response.data.name)
			history.push('/profile')

		} catch (error) {
			setError('Email ou senha incorretos, tente novamente!')
		}

	}
	return (
		<div className="login-container">
			<section className="form">
				<img src={logoImg} alt="LogoImg" />
				<form onSubmit={handleLoign}>
					<h1>Faça seu logon</h1>
					<input placeholder="Username"
						value={email}
						onChange={e => setEmail(e.target.value)}
						style={{ marginBottom: 10 }}
						required
					/>
					<input placeholder="Password"
						value={password}
						type='password'
						onChange={e => setPassword(e.target.value)}
						required
					/>
					<div
						style={{
							color: "#E02041",
							marginLeft: '3%',
							marginTop: 5,
							marginBottom: 3,
						}}
					>
						<p>{ErrorPassOrEmail}</p>
					</div>
					<button className="button" type="submit">Entrer</button>
					<Link className='back-link' to="/register">
						<FiLogIn size={16} color="#E02041" />
						Não tenho cadastro
					</Link>
				</form>
			</section>

			<img src={heroImg} alt="HeroImg" />
		</div>
	);
}