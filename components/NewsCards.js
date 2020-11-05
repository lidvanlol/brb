import React from "react";
import { StyleSheet, TouchableOpacity, Text, View } from "react-native";
import { Card, Title, Paragraph } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

const NewsCards = ({
	title,
	description,
	urlToImage,

	content,
}) => {
	const navigation = useNavigation();

	return (
		<>
			<Card style={styles.newsCards}>
				<Card.Content>
					<Title style={styles.title}>{title}</Title>
					<Card.Cover style={styles.img} source={{ uri: urlToImage }} />
					<Paragraph style={styles.description}>{description}</Paragraph>
				</Card.Content>
				<Card.Actions>
					<View style={styles.right}>
						<TouchableOpacity
							style={styles.button}
							onPress={() => {
								/* 1. Navigate to the Details route with params */
								navigation.navigate("NewsDetails", {
									urlToImage,
									content,
									title,
								});
							}}
						>
							<Text style={styles.more}>More</Text>
						</TouchableOpacity>
					</View>
				</Card.Actions>
			</Card>
		</>
	);
};

const styles = StyleSheet.create({
	newsCards: {
		borderRadius: 25,

		margin: 20,
		flexDirection: "row",
	},
	img: {
		marginTop: 10,
		marginBottom: 10,
	},
	title: {
		fontWeight: "bold",
		fontSize: 23,
		marginTop: 10,
		marginBottom: 10,
	},
	description: {
		fontSize: 20,
		marginTop: 10,
		marginBottom: 10,
	},
	button: {
		width: 120,
		height: 50,
		marginBottom: 20,

		backgroundColor: "#3366ff",
		justifyContent: "center",
		alignItems: "center",
	},
	more: {
		color: "white",
		fontSize: 20,
	},
	right: {
		alignItems: "flex-end",
		alignSelf: "flex-end",
		justifyContent: "flex-end",
		flex: 2,
		marginRight: 10,
	},
});

export default NewsCards;
