import React from "react";
import { StyleSheet, Image, View, Text, ScrollView } from "react-native";

function NewsDetails({ route }) {
	const { content, title, urlToImage } = route.params;
	return (
		<ScrollView>
			<View style={{ flex: 1 }}>
				<Text style={styles.title}>{title}</Text>
				<Image style={styles.image} source={{ uri: urlToImage }} />
				<Text style={styles.content}>{content.slice(0, 200)}</Text>
			</View>
		</ScrollView>
	);
}

const styles = StyleSheet.create({
	image: {
		width: "100%",
		height: 350,
		justifyContent: "center",
		alignItems: "center",
		alignSelf: "center",
	},
	title: {
		textAlign: "center",
		fontWeight: "bold",
		fontSize: 24,
		padding: 10,
		marginBottom: 20,
		marginTop: 20,
	},
	content: {
		padding: 20,
		fontSize: 20,

		marginBottom: 10,
	},
});
export default NewsDetails;
