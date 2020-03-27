import React from 'react'
import { View, Text, Image, TouchableOpacity, Linking, ScrollView, FlatList } from 'react-native'
import { useNavigation, useRoute } from '@react-navigation/native'
import { Feather } from '@expo/vector-icons'
import * as MailComposer from 'expo-mail-composer'

import style from './style'
import LogoImag from '../../assets/logo.png'

export default function Detail() {
	const route = useRoute()


	const incident = route.params.incident

	const navigation = useNavigation()
	const mensage = `Olá ${incident.name}, estou entrado em contato pois gostaria de ajudar no caso ${incident.title} com o valor de ${Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(incident.value)}`
	async function sendEmail() {
		await MailComposer.composeAsync({
			subject: `Herói do caso: ${incident.title}`,
			recipients: [incident.email],
			body: mensage
		})
	}

	function sendWhastApp() {
		Linking.openURL(`whatsapp://send?phone=+55${incident.whatsapp}&text=${mensage}`)
	}

	return (
		<View style={style.container}>
			<View style={style.header}>
				<Image source={LogoImag} />
				<TouchableOpacity onPress={() => navigation.goBack()}>
					<Feather name="arrow-left" size={28} color="#e02041" />
				</TouchableOpacity>
			</View>
			<ScrollView showsVerticalScrollIndicator={false}>
				<View style={style.incident}>
					<Text style={style.incidentType}>ONG:</Text>
					<Text style={style.incidentValueMargin}>{incident.name} de {incident.city}/{incident.uf}</Text>

					<Text style={style.incidentType}>CASO:</Text>
					<Text style={style.incidentValueMargin}>{incident.title}</Text>

					<Text style={style.incidentType}>DESCRIÇÃO:</Text>
					<Text style={style.incidentValueMargin}>{incident.description}</Text>

					<Text style={style.incidentType}>VALOR:</Text>
					<Text style={style.incidentValue}>{
						Intl.NumberFormat('pt-BR', {
							style: 'currency', currency: 'BRL'
						}).format(incident.value)}</Text>
				</View>

				<View style={style.cotactBox}>
					<Text style={style.heroTitle}>Salve o dia!</Text>
					<Text style={style.heroTitle}>Seja o herói desse caso.</Text>

					<Text style={style.description}>Entre em contato: </Text>

					<View style={style.interation}>
						<TouchableOpacity style={style.button} onPress={sendWhastApp}>
							<Text style={style.buttonText}>WhatsApp</Text>
						</TouchableOpacity>
						<TouchableOpacity style={style.button} onPress={sendEmail}>
							<Text style={style.buttonText}>E-mail</Text>
						</TouchableOpacity>
					</View>
				</View>
			</ScrollView>
		</View>
	)
}