import * as React from "react";
import {
	View,
	Text,
	StyleSheet,
	StatusBar,
	TouchableOpacity,
	SafeAreaView,
} from "react-native";
import Colors from "../constants/Colors";
import { Appbar } from "react-native-paper";
function Home({ navigation }) {
	return (
		<SafeAreaView>
			<StatusBar backgroundColor={Colors.primary} barStyle="default" />

			<View style={styles.container}>
				<Appbar style={styles.appbar}>
					<TouchableOpacity
						style={styles.nav}
						title="Top News"
						onPress={() => navigation.navigate("TopNewsUs")}
					>
						<Text style={{ color: "#ffffff" }}>Top News</Text>
					</TouchableOpacity>
					<TouchableOpacity
						style={styles.nav}
						title="Categories"
						onPress={() => navigation.navigate("CategoriesUs")}
					>
						<Text style={{ color: "#ffffff" }}>Category</Text>
					</TouchableOpacity>
					<TouchableOpacity
						style={styles.nav}
						onPress={() => navigation.navigate("SearchUs")}
					>
						<Text style={{ color: "#ffffff" }}>Search</Text>
					</TouchableOpacity>
				</Appbar>
				<View style={styles.center}>
					<Text style={styles.text}> News App</Text>
				</View>
			</View>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	nav: {
		backgroundColor: "#33BDFF",

		width: 80,
		height: 30,
		textAlign: "center",
		justifyContent: "center",
		margin: 10,
		alignContent: "center",
		alignItems: "center",
		textTransform: "uppercase",
		fontSize: 18,
	},

	errMsg: {
		fontSize: 18,
		justifyContent: "center",
		alignItems: "center",
		color: "white",
	},

	text: {
		alignSelf: "center",
		fontSize: 35,
		fontWeight: "bold",
		alignContent: "center",
		justifyContent: "center",
		marginTop: "60%",
	},
	appbar: {
		flexDirection: "row",
	},
});

export default Home;
