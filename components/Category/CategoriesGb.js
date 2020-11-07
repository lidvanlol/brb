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
} from "react-native";

import Colors from "../../constants/Colors";
import Env from "../../constants/Env";
import { useNavigation } from "@react-navigation/native";
import { Appbar } from "react-native-paper";
function CategoriesGb() {
	const [newsDataEnt, setNewsDataEnt] = useState();
	const [newsDataGen, setNewsDataGen] = useState();
	const [newsDataHel, setNewsDataHel] = useState();
	const [newsDataSci, setNewsDataSci] = useState();

	const [newsDataTech, setNewsDataTech] = useState();

	const [errorMessage, setErrorMessage] = useState();
	const navigation = useNavigation();

	const load = async () => {
		try {
			const newsApientertaiment = `http://newsapi.org/v2/top-headlines?country=gb&category=entertainment&pageSize=10&apiKey=${Env.NEWS_API_KEY}`;

			const response = await fetch(newsApientertaiment);
			const responseJson = await response.json();

			if (response.ok) {
				setNewsDataEnt(responseJson.articles);
			} else setErrorMessage(responseJson.message);
		} catch (error) {
			console.log("Error", error);
			setErrorMessage(error.message);
		}
	};

	const load2 = async () => {
		try {
			const newsApiGen = `http://newsapi.org/v2/top-headlines?country=gb&category=general&pageSize=10&apiKey=${Env.NEWS_API_KEY}`;

			const response = await fetch(newsApiGen);
			const responseJson = await response.json();

			if (response.ok) {
				setNewsDataGen(responseJson.articles);
			} else setErrorMessage(responseJson.message);
		} catch (error) {
			console.log("Error", error);
			setErrorMessage(error.message);
		}
	};

	const load3 = async () => {
		try {
			const newsApiHel = `http://newsapi.org/v2/top-headlines?country=gb&category=health&pageSize=10&apiKey=${Env.NEWS_API_KEY}`;

			const response = await fetch(newsApiHel);
			const responseJson = await response.json();

			if (response.ok) {
				setNewsDataHel(responseJson.articles);
			} else setErrorMessage(responseJson.message);
		} catch (error) {
			console.log("Error", error);
			setErrorMessage(error.message);
		}
	};

	const load4 = async () => {
		try {
			const newsApiSci = `http://newsapi.org/v2/top-headlines?country=gb&category=science&pageSize=10&apiKey=${Env.NEWS_API_KEY}`;

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

	const load5 = async () => {
		try {
			const newsApiTech = `http://newsapi.org/v2/top-headlines?country=gb&category=technology&pageSize=10&apiKey=${Env.NEWS_API_KEY}`;

			const response = await fetch(newsApiTech);
			const responseJson = await response.json();

			if (response.ok) {
				setNewsDataTech(responseJson.articles);
			} else setErrorMessage(responseJson.message);
		} catch (error) {
			console.log("Error", error);
			setErrorMessage(error.message);
		}
	};

	useEffect(() => {
		load();
		load2();
		load3();
		load4();
		load5();
	}, []);
	const NewsCards = ({ title, description, urlToImage, content }) => {
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
				<Appbar.BackAction onPress={() => navigation.goBack("TopNewsGb")} />

				<View style={styles.right}>
					<Button
						style={styles.lng}
						title="us"
						onPress={() => {
							navigation.navigate("CategoriesUs");
						}}
					/>

					<Button
						style={styles.lng}
						title="gb"
						onPress={() => {
							navigation.navigate("CategoriesGb");
						}}
					></Button>
				</View>
			</Appbar>
			<ScrollView>
				<Text style={styles.header}>Top News for Categories in Gb</Text>

				<TouchableOpacity
					onPress={() => {
						/* 1. Navigate to the Details route with params */
						navigation.navigate("entertaimentGb");
					}}
				>
					<Text style={styles.categoryTitle}>Top News for entertainment</Text>
				</TouchableOpacity>
				{newsDataEnt ? (
					<FlatList
						horizontal
						data={newsDataEnt}
						renderItem={renderItem}
						keyExtractor={(item) => item.publishedAt}
						style={styles.flatList}
					/>
				) : (
					errorMessage && (
						<Text style={styles.errMsg}>Error: {errorMessage}</Text>
					)
				)}
				<TouchableOpacity
					onPress={() => {
						/* 1. Navigate to the Details route with params */
						navigation.navigate("genGb");
					}}
				>
					<Text style={styles.categoryTitle}>Top News for general</Text>
				</TouchableOpacity>
				{newsDataGen ? (
					<FlatList
						horizontal
						data={newsDataGen}
						renderItem={renderItem}
						keyExtractor={(item) => item.publishedAt}
					/>
				) : (
					errorMessage && (
						<Text style={styles.errMsg}>Error: {errorMessage}</Text>
					)
				)}
				<TouchableOpacity
					onPress={() => {
						/* 1. Navigate to the Details route with params */
						navigation.navigate("healthGb");
					}}
				>
					<Text style={styles.categoryTitle}>Top News for Health</Text>
				</TouchableOpacity>
				{newsDataHel ? (
					<FlatList
						horizontal
						data={newsDataHel}
						renderItem={renderItem}
						keyExtractor={(item) => item.publishedAt}
					/>
				) : (
					errorMessage && (
						<Text style={styles.errMsg}>Error: {errorMessage}</Text>
					)
				)}
				<TouchableOpacity onPress={() => navigation.navigate("scienceGb")}>
					<Text style={styles.categoryTitle}>Top News for Science</Text>
				</TouchableOpacity>
				{newsDataSci ? (
					<FlatList
						horizontal
						data={newsDataSci}
						renderItem={renderItem}
						keyExtractor={(item) => item.publishedAt}
					/>
				) : (
					errorMessage && (
						<Text style={styles.errMsg}>Error: {errorMessage}</Text>
					)
				)}
				<TouchableOpacity onPress={() => navigation.navigate("techGb")}>
					<Text style={styles.categoryTitle}>Top News for Technology</Text>
				</TouchableOpacity>
				{newsDataTech ? (
					<FlatList
						horizontal
						data={newsDataTech}
						renderItem={renderItem}
						keyExtractor={(item) => item.publishedAt}
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

export default CategoriesGb;
