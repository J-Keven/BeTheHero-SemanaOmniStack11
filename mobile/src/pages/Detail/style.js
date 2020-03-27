import { StyleSheet } from 'react-native'
import Contants from 'expo-constants'
export default StyleSheet.create({
	container: {
		flex: 1,
		paddingHorizontal: 20,
		paddingTop: Contants.statusBarHeight + 20
	},

	header: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: 'center'
	},

	incident: {
		padding: 24,
		backgroundColor: "#FFF",
		borderRadius: 10,
		marginTop: 48,
	},
	incidentType: {
		fontSize: 14,
		fontWeight: "bold",
		color: "#41414d",
	},
	incidentValueMargin: {
		marginTop: 8,
		marginBottom: 24,
		fontSize: 15,
		color: "#737380",
		lineHeight: 22

	},
	incidentValue: {
		marginTop: 8,
		fontSize: 15,
		color: "#737380",

	},

	cotactBox: {
		padding: 24,
		backgroundColor: "#FFF",
		marginTop: 16,
		borderRadius: 10,
	},

	heroTitle: {
		fontSize: 20,
		fontWeight: "bold",
		lineHeight: 30,
	},

	description: {
		marginTop: 10,
		color: "#737380",
		marginBottom: 15,
	},

	interation: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems:"center"
	},

	button: {
		height: 50,
		width: "48%",
		backgroundColor: "#e02041",
		borderRadius: 8,
		justifyContent: "center",
		alignItems: "center"
	},

	buttonText: {
		fontSize: 16,
		color: "#FFF",
		fontWeight: "bold"
	}

})