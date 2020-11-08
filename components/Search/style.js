import { StyleSheet } from "react-native"
import Colors from "../../constants/Colors";
const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: Colors.primary,
	},
	title: {
		fontSize: 24,
		fontWeight: "bold",
		color: "white",
		textAlign: "center",
		marginTop: 20,
		marginBottom: 20,
	},

	errMsg: {
		fontSize: 18,
		justifyContent: "center",
		alignItems: "center",
		color: "white",
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
	search: {
		width: "100%",
		backgroundColor: "white",
		height: 80,
		padding: 10,
		fontSize: 30,
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
	appbar: {
		display: "flex",
		flexDirection: "row",
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
	rightButtons: {
		alignSelf: "flex-end",
		flex: 1,
	},
	
});

export default styles