import React, { useState } from 'react'
import './style.css'
import { Link, useHistory } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi'
import logoImg from '../../assets/logo.svg'
import api from '../../services/api'
function NewIncident(){ 
	
	const token = localStorage.getItem('ongToken')
	const history = useHistory()

	if(!token){
		history.push('/')
	}
	
	const [title, setTitle] = useState('')
	const [description, setDescription] = useState('')
	const [value, setVelue] = useState('')

	async function handleCadastreCase(event){
		event.preventDefault() // impede que ao clicar no botao de submit a pagina recarregue
		const data = {
			title,
			description,
			value
		}
		try {
			await api.post('/incidents', data ,{
				headers: {
					authorization: token
				}
			})	
		} catch (error) {
			alert('Erro ao cadastrar caso, tente novamente.')
		}
		
		history.push('/profile')
	}

	return (
		<div className="new-incident-container">
			<div className="content">
				<section className="form">
					<img src={logoImg} alt="Logo"/>
					<h1>Cadastrar novo caso</h1>
					<p>Descreva os casos detalhadamente para incontrar uma héroi para resolver isso.</p>

					<Link className='back-link' to="/profile">
						<FiArrowLeft size={16} color="#E02041"/>
						Voltar para Home
					</Link>
				</section>

				<form onSubmit={handleCadastreCase}>
					<input 
						placeholder="Titulo do caso"
						value={title}
						onChange={e => setTitle(e.target.value)}
						required
					/>
					<textarea 
						placeholder="Descrição"
						value={description}
						onChange={e => setDescription(e.target.value)}
						required
					/>
					<input 
						placeholder="Valor em rais"
						value={value}
						onChange={e => setVelue(e.target.value)}
						required
					/>
					<button className="button" type="submit">Castrar</button>
				</form>
			</div>
		</div>
	)
}

export default NewIncident;