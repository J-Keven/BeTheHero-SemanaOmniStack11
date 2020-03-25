import React, { useState, useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'

import { FiPower, FiTrash2 } from 'react-icons/fi'
import logoImg from '../../assets/logo.svg'
import './style.css'

import api from '../../services/api'

function Profile() {

	const name = localStorage.getItem('ongName')
	const token = localStorage.getItem('ongToken')
	const history = useHistory()

	if (!token) {
		history.push('/')
	}

	const [incidents, setIncidents] = useState([])
	useEffect(() => {
		async function handleReloadIcidents() {
			const data = await api.get('/profile', {
				headers: {
					authorization: token
				}
			})


			setIncidents(data.data)
		}

		handleReloadIcidents();
	},
		[token]
	);


	async function hadleDelete(id){
		try{
			await api.delete(`/incidents/${id}`, {
				headers: {
					authorization: token	
				}
			})

			setIncidents(incidents.filter(item => item.id !== id))
		} catch(error){
			alert('Error ao deletaro, tente novamente')
		}
	}
	function handleLogOut(){
		localStorage.clear()
		history.push('/')
	}
	return (
		<div className="profile-container">
			<header>
				<img src={logoImg} alt="LogoImg" />
				<span>Bem vinda, {name}</span>
				<Link to='/incidents/new' className='button'>Cadastrar novo caso</Link>
				<button onClick={handleLogOut}><FiPower size={18} color="E02041" /></button>
			</header>

			<h1>Caso listados</h1>

			<ul>{incidents.map(incident => (
				<li key={incident.id}>
					<strong>Caso: </strong>
					<p>{incident.title}</p>

					<strong>Descrição: </strong>
					<p>{incident.description}</p>

					<strong>Valor: </strong>
					<p>{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(incident.value)}</p>
					<button onClick={() => hadleDelete(incident.id)} type="button">
						<FiTrash2 size={20} color="#a8a8b3" />
					</button>
				</li>
			))
			}</ul>
		</div>
	)
}
export default Profile;