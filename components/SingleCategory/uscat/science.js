import React, { useState, useEffect } from "react";
import { Card, Title, Paragraph } from "react-native-paper";
("react-native");
import {
	StyleSheet,
	StatusBar,
	Text,
	View,
	FlatList,
	Button,
	ScrollView,
	TouchableOpacity,
	SafeAreaView
} from "react-native";

import Colors from "../../../constants/Colors";
import Env from "../../../constants/Env";
import { useNavigation } from "@react-navigation/native";
import { Appbar } from "react-native-paper";
function scienceUs() {
	const [newsDataSci, setNewsDataSci] = useState();

	const [errorMessage, setErrorMessage] = useState();
	const navigation = useNavigation();

	const load = async () => {
		try {
			const newsApiSci = `http://newsapi.org/v2/top-headlines?country=us&category=science&pageSize=10&apiKey=${Env.NEWS_API_KEY}`;

			const response = await fetch(newsApiSci);
			const responseJson = await response.json();

			if (response.ok) {
				setNewsDataSci(responseJson.articles);
			} else setErrorMessage(responseJson.message);
		} catch (error) {
			console.log("Error", error);
			setErrorMessage(error.message);
		}
	};

	useEffect(() => {
		load();
	}, []);
	const NewsCards = ({ title, description, urlToImage, content }) => {
		const navigation = useNavigation();
		return (
			<>
				<SafeAreaView>
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
				</SafeAreaView>
			</>
		);
	};
	const renderItem = ({ item }) => (
		<NewsCards
			title={item.title}
			description={item.description}
			urlToImage={item.urlToImage}
			content={item.content}
		/>
	);

	return (
		<View style={styles.container}>
			<StatusBar backgroundColor={Colors.primary} barStyle="default" />
			<Appbar style={styles.appbar}>
				<Appbar.BackAction onPress={() => navigation.goBack("main")} />

				<View style={styles.right}>
					<Button
						style={styles.lng}
						title="us"
						onPress={() => {
							navigation.navigate("scienceUs");
						}}
					/>

					<Button
						style={styles.lng}
						title="gb"
						onPress={() => {
							navigation.navigate("scienceGb");
						}}
					></Button>
				</View>
			</Appbar>
			<ScrollView>
				<Text style={styles.header}>Top News Science in US</Text>
				{newsDataSci ? (
					<FlatList
						data={newsDataSci}
						renderItem={renderItem}
						keyExtractor={(item) => item.publishedAt}
						style={styles.flatList}
					/>
				) : (
					errorMessage && (
						<Text style={styles.errMsg}>Error: {errorMessage}</Text>
					)
				)}
			</ScrollView>
		</View>
	);
}
const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: Colors.primary,
	},
	newsCards: {
		borderRadius: 25,
		display: "flex",

		width: 350,
		marginLeft: 15,
		marginTop: 10,
		height: 700,
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

	button: {
		width: 120,
		height: 50,
		marginBottom: 20,
		marginTop: 100,
		flex: 2,
		backgroundColor: "#3366ff",
		justifyContent: "center",
		alignItems: "center",
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
		fontSize: 30,
	},
	lng: {
		height: "",
		backgroundColor: "red",
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

export default scienceUs;
