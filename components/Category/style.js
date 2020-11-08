import { StyleSheet } from "react-native";
import Colors from "../../constants/Colors";
const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: Colors.primary,
	},
	newsCards: {
		borderRadius: 25,
		display: "flex",
		position: "relative",
		width: 270,
		marginLeft: 15,
		marginTop: 15,
		height: 850,
		marginBottom: 15,
	},
	img: {
		marginTop: 10,
		marginBottom: 10,
		width: "100%",
	},
	title: {
		fontWeight: "bold",
		fontSize: 24,
		padding: 10,
	},
	description: {
		fontSize: 22,
		marginTop: 10,
		marginBottom: 10,
	},
	lang: {
		backgroundColor: "#33BDFF",
		textAlign: "center",
		justifyContent: "center",
		marginRight: 10,
		alignContent: "center",
		alignItems: "center",

		fontSize: 18,
		width: 30,
		height: 30,
	},
	button: {
		width: 120,
		height: 50,

		backgroundColor: "#3366ff",
		justifyContent: "center",
		alignItems: "center",

		position: "absolute",

		right: 0,
		marginRight: 10,
	},
	more: {
		color: "white",
		fontSize: 22,
		textTransform: "uppercase",
	},
	appbar: {
		position: "relative",
		flexDirection: "row",
	},
	right: {
		position: "absolute",
		right: 10,
		flexDirection: "row",
	},
	header: {
		color: "white",
		alignItems: "center",
		fontWeight: "bold",
		textAlign: "center",
		marginTop: 20,
		marginBottom: 20,
		fontSize: 26,
	},

	categoryTitle: {
		color: "white",
		fontWeight: "bold",
		fontSize: 20,
		marginLeft: 10,
		marginTop: 10,
		marginBottom: 10,
	},
	errMsg: {
		fontSize: 18,
		justifyContent: "center",
		alignItems: "center",
		color: "white",
	},
});

export default styles;
