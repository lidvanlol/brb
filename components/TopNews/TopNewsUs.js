import React, { useState, useEffect } from "react";
import {
	StyleSheet,
	StatusBar,
	Text,
	View,
	FlatList,
	Button,
	SafeAreaView,
} from "react-native";
import NewsCards from "../NewsCard/NewsCards";
import Colors from "../../constants/Colors";
import Env from "../../constants/Env";
import { useNavigation } from "@react-navigation/native";
import { Appbar } from "react-native-paper";

const TopNewsUs = () => {
	const [newsData, setNewsData] = useState();
	const [errorMessage, setErrorMessage] = useState();
	const navigation = useNavigation();

	const load = async () => {
		try {
			const newsApi = `http://newsapi.org/v2/top-headlines?country=us&apiKey=${Env.NEWS_API_KEY}`;
			const response = await fetch(newsApi);
			const responseJson = await response.json();

			if (response.ok) {
				setNewsData(responseJson.articles);
			} else setErrorMessage(responseJson.message);
		} catch (error) {
			console.log("Error", error);
			setErrorMessage(error.message);
		}
	};

	useEffect(() => {
		load();
	}, []);

	const renderItem = ({ item }) => (
		<NewsCards
			title={item.title}
			description={item.description}
			urlToImage={item.urlToImage}
			content={item.content}
		/>
	);

	return (
		<SafeAreaView style={styles.container}>
			<StatusBar backgroundColor={Colors.primary} barStyle="default" />
			<Appbar>
				<Appbar.BackAction onPress={() => navigation.goBack()} />

				<View style={styles.right}>
					<Button
						title="us"
						onPress={() => {
							/* 1. Navigate to the Details route with params */
							navigation.navigate("TopNewsUs");
						}}
					/>

					<Button
						title="gb"
						onPress={() => {
							/* 1. Navigate to the Details route with params */
							navigation.navigate("TopNewsGb");
						}}
					></Button>
				</View>
			</Appbar>
			<View>
				<Text style={styles.header}>Top News Us</Text>
			</View>
			{newsData ? (
				<FlatList
					data={newsData}
					renderItem={renderItem}
					keyExtractor={(item) => item.publishedAt}
				/>
			) : (
				errorMessage && <Text style={styles.errMsg}>Error: {errorMessage}</Text>
			)}
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: Colors.primary,
	},
	header: {
		height: 50,
		backgroundColor: Colors.primary,
		alignItems: "center",
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
	header: {
		color: "white",
		alignItems: "center",
		fontWeight: "bold",
		textAlign: "center",
		marginTop: 20,
		marginBottom: 20,
		fontSize: 30,
	},
});

export default TopNewsUs;
