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
		width: 280,
		marginLeft: 15,
		marginTop: 15,
		height: 910,
		marginBottom: 15,
	},
	img: {
		marginTop: 10,
		marginBottom: 10,
	},
	title: {
		fontWeight: "bold",
		fontSize: 22,
		padding: 10,
	},
	description: {
		fontSize: 20,
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
		marginTop: 30,
		marginBottom: 30,
		fontSize: 26,
	},

	categoryTitle: {
		color: "white",
		fontWeight: "bold",
		fontSize: 20,
		marginLeft: 20,
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
