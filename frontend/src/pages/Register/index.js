import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'

import api from '../../services/api'

import { FiArrowLeft } from 'react-icons/fi'
import logoImg from '../../assets/logo.svg'
import './style.css'


function Register() {

	const [name, setName] = useState('')
	const [email, setEmail] = useState('')
	const [whatsapp, setWhatsapp] = useState('')
	const [city, setCity] = useState('')
	const [uf, setUf] = useState('')
	const [password, setPassword] = useState('')
	const [confirmPassword, setConfirmPassword] = useState('')
	const [borderColor, setBosrdercolorPass] = useState('')
	const [borderColorConfir, setBosrdercolorConfir] = useState('')

	const [erroPassword, setErroPassword] = useState('')
	const [errosConfirm, setErroConfirm] = useState('')

	const history = useHistory()
	async function hanldeRegister(e) {
		e.preventDefault();
		if (password.length < 6) {
			setErroConfirm('')
			setErroPassword('Use 6 caracteres ou mais para uma senha!')
			return 0;
		}

		if (confirmPassword !== password) {
			setErroConfirm('As senhas nao coencidem')

			return 0;
		}
		const data = {
			name,
			email,
			whatsapp,
			city,
			uf,
			password
		}
		try {
			const response = await api.post('/ongs', data)
			alert(`Seu ID de acesso é ${response.data.id}`)
			history.push('/')
		} catch (error) {
			alert(`Error o cadastrar-se ${error}`)
		}
		return 1;
	}


	return (
		<div className="register-container">
			<div className="content">
				<section className="form">
					<img src={logoImg} alt="Logo" />
					<h1>Cadastro</h1>
					<p>Faça seu cadastro. entre na plataforma e ajude pessoas a encontrar os casos da sua ONG.</p>

					<Link className='back-link' to="/">
						<FiArrowLeft size={16} color="#E02041" />
						Voltar para o login
					</Link>
				</section>

				<form onSubmit={hanldeRegister}>
					<input
						placeholder="Nome da ONG"
						value={name}
						onChange={e => setName(e.target.value)}
					/>
					<input
						type="email"
						placeholder="E-mail"
						value={email}
						onChange={e => setEmail(e.target.value)}
					/>
					<input
						placeholder="WhatsApp"
						value={whatsapp}
						onChange={e => setWhatsapp(e.target.value)}
					/>
					<div className="input-group">
						<input
							placeholder="Cidade"
							value={city}
							onChange={e => setCity(e.target.value)}
						/>
						<input
							placeholder="UF"
							style={{
								width: 80
							}}
							value={uf}
							onChange={e => setUf(e.target.value)}
						/>
					</div>
					<input
						className='password'
						type='password'
						placeholder="Senha"
						value={password}
						style={{ borderColor: borderColor }}
						onChange={e => {
							if (e.target.value.length < 6) {
								setBosrdercolorPass('#E02041')
							}
							else {
								setBosrdercolorPass('')
							}
							setPassword(e.target.value)
						}
						}
					/>

					<div style={{
						color: '#E02041',
						marginLeft: '3%',
						marginTop: 5,
						marginBottom: 5,
					}}>
						<p>{erroPassword}</p>
					</div>

					<input
						className='password'
						type='password'
						placeholder="Senha"
						value={confirmPassword}
						style={{ borderColor: borderColorConfir }}
						onChange={e => {
							if (e.target.value !== password) {
								setBosrdercolorConfir('#E02041')
							}
							else {
								setBosrdercolorConfir('')
							}
							setConfirmPassword(e.target.value)
						}
						}
					/>
					<div style={{
						color: '#E02041',
						marginLeft: '3%',
						marginTop: 5,
						marginBottom: 5,
					}}>
						<p>{errosConfirm}</p>
					</div>
					<button className="button" type="submit">Castrar</button>
				</form>
			</div>
		</div>
	)
}

export default Register;