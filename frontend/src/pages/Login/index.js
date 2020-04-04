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
	const history = useHistory()
	async function handleLoign(e) {
		e.preventDefault()
		try {

			const response = await api.post('/login', { email, password })
			localStorage.setItem('ongToken', response.data.token)
			localStorage.setItem('ongName', response.data.name)
			history.push('/profile')

		} catch (error) {
			alert("Houve um erro ao fazer login")
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
					/>
					<input placeholder="Password"
						value={password}
						type='password'
						onChange={e => setPassword(e.target.value)}
					/>
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