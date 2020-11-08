import { StyleSheet } from "react-native";
import Colors from "../../constants/Colors";
const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: Colors.primary,
	},
	
	title: {
		fontSize: 28,
		color: "white",
	},
	errMsg: {
		fontSize: 18,
		justifyContent: "center",
		alignItems: "center",
		color: "white",
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
	header: {
		color: "white",
		alignItems: "center",
		fontWeight: "bold",
		textAlign: "center",
		marginTop: 20,
		marginBottom: 20,
		fontSize: 26,
	},
});

export default styles;
