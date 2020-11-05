import * as React from "react";
import { Button, View, Text, StyleSheet, StatusBar } from "react-native";
import Colors from "../constants/Colors";
import { Appbar } from "react-native-paper";
function Home({ navigation }) {
	return (
		<View>
			<StatusBar backgroundColor={Colors.primary} barStyle="default" />

			<View style={styles.container}>
				<Appbar style={styles.appbar}>
					<Button
						title="Top News"
						onPress={() => navigation.navigate("main")}
					/>
					<Button
						style={styles.top}
						title="Categories"
						onPress={() => navigation.navigate("Categories")}
					/>
					<Button
						title="Search"
						style={styles.top}
						onPress={() => navigation.navigate("Search")}
					/>
				</Appbar>
				<View style={styles.center}>
					<Text style={styles.text}> News App</Text>
				</View>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
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
