import React, { useEffect, useState } from 'react'
import { View, Text, Image, TouchableOpacity, FlatList} from 'react-native'
import { Feather } from '@expo/vector-icons'
import LogoImg from '../../assets/logo.png'
import { useNavigation } from '@react-navigation/native'

import style from './style'
import api from '../../services/api'

export default function Incidentes() {


	const navigation = useNavigation()
	const [incidents, setIncidents] = useState([])
	const [total, setTotal] = useState(0)
	const [page, setPage] = useState(1)
	const [loading, setLoading] = useState(false)

	function navigationToDetails( incident ) {
		navigation.navigate("Detail", { incident })

	}

	async function loadIncidents() {
		if(loading){
			return 0;
		}

		if(total > 0 && total == incidents.length){
			return 0;
		}

		setLoading(true)

		const response = await api.get(`incidents?page=${page}`)
		setIncidents([...incidents, ...response.data])
		setTotal(response.headers['x-total-count'])
		setPage(page + 1)
		setLoading(false)

	}

	useEffect(() => {
		loadIncidents()
	}, [])

	return (
		<View style={style.container}>
			<View style={style.header}>
				<Image source={LogoImg} />
				<Text style={style.headerText}>Total de
				<Text style={style.headerTextCase}> {total} casos</Text>.
				</Text>
			</View>

			<View >
				<Text style={style.title}>Bem-Vindo!</Text>
				<Text style={style.description}>Escolha um dos casos abaixo e salve o dia</Text>
			</View>

			<FlatList
				data={incidents}
				keyExtractor={item => String(item.id)}
				showsVerticalScrollIndicator={false}
				onEndReached={loadIncidents}
				onEndReachedThreshold={0.3}
				style={style.IncidentesList}
				renderItem={({ item }) => (
					<View
						style={style.incident}
					>
						<Text style={style.incidentType}>CASO: </Text>
						<Text style={style.incidentValue}>{item.title}</Text>

						<Text style={style.incidentType}>ONG: </Text>
						<Text style={style.incidentValue}>{item.name}</Text>

						<Text style={style.incidentType}>Valor: </Text>
						<Text style={style.incidentValue}>{
							Intl.NumberFormat('pt-BR', {
								style: 'currency',
								currency: "BRL"
							}).format(item.value)}
						</Text>

						<TouchableOpacity style={style.detailsButton} onPress={() => navigationToDetails(item)}>
							<Text style={style.detailsText}>Ver mais detalhes do caso</Text>
							<Feather name="arrow-right" size={16} color="#E02041" />
						</TouchableOpacity>
					</View>
				)}
			/>

		</View>
	)
}