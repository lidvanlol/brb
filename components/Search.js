import React, { useState, useEffect } from "react";
import {
	StyleSheet,
	StatusBar,
	Text,
	View,
	FlatList,
	Button,
	TextInput,
} from "react-native";
import NewsCards from "./NewsCards";
import Colors from "../constants/Colors";
import Env from "../constants/Env";
import { useNavigation } from "@react-navigation/native";
import { Appbar } from "react-native-paper";

const search = () => {
	const [errorMessage, setErrorMessage] = useState();
	const navigation = useNavigation();
	const [searchValue, setSearchValue] = useState("");
	const [searchResults, setSearchResults] = useState(null);

	const searchHandler = async () => {
		try {
			const search = `http://newsapi.org/v2/top-headlines?country=us&q=${searchValue}&apiKey=${Env.NEWS_API_KEY}`;
			const response = await fetch(search);
			const responseJson = await response.json();
			if (response.ok) {
				setSearchResults(responseJson.articles);
			} else setErrorMessage(responseJson.message);
		} catch (error) {
			console.log("Error", error);
			setErrorMessage(error.message);
		}
	};

	useEffect(() => {
		searchHandler();
	}, []);

	// const load = async () => {
	// 	try {
	// 		const newsApi = `http://newsapi.org/v2/top-headlines?country=us&apiKey=${Env.NEWS_API_KEY}`;
	// 		const response = await fetch(newsApi);
	// 		const responseJson = await response.json();

	// 		if (response.ok) {
	// 			setNewsData(responseJson.articles);
	// 		} else setErrorMessage(responseJson.message);
	// 	} catch (error) {
	// 		console.log("Error", error);
	// 		setErrorMessage(error.message);
	// 	}
	// };

	// useEffect(() => {
	// 	load();
	// }, []);

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
				<Appbar.BackAction onPress={() => navigation.goBack()} />

				<View style={styles.right}>
					<Button
						title="us"
						style={styles.topBtn}
						onPress={() => {
							navigation.navigate("main");
						}}
					/>

					<Button
						style={styles.topBtn}
						title="gb"
						onPress={() => {
							navigation.navigate("mainGB");
						}}
					></Button>
				</View>
			</Appbar>
			<TextInput
				placeholder="Search"
				onChange={setSearchValue}
				onSubmitEditing={searchHandler}
				placeholderTextColor={"#888888"}
				style={styles.search}
			/>

			<Text style={styles.title}>Search Top News In ... by Term</Text>

			{searchResults ? (
				<FlatList
					data={searchResults}
					renderItem={renderItem}
					keyExtractor={(item) => item.publishedAt}
				/>
			) : (
				errorMessage && <Text style={styles.errMsg}>Error: {errorMessage}</Text>
			)}
		</View>
	);
};

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
		fontSize: 30,
	},
	search: {
		width: "100%",
		backgroundColor: "white",
		height: 80,
		padding: 10,
		fontSize: 30,
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
	topBtn: {},
});

export default search;
