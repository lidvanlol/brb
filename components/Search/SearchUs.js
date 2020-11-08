import React, { useState, useEffect } from "react";
import {
	
	StatusBar,
	SafeAreaView,
	Text,
	View,
	FlatList,
	TouchableOpacity,
	
} from "react-native";
import NewsCards from "../NewsCard/NewsCards";
import Colors from "../../constants/Colors";
import Env from "../../constants/Env";
import { useNavigation } from "@react-navigation/native";
import { Appbar, TextInput } from "react-native-paper";
import styles from "./style";
const searchUs = () => {
	const [errorMessage, setErrorMessage] = useState();
	const navigation = useNavigation();
	const [searchValue, setSearchValue] = useState("");
	const [searchResults, setSearchResults] = useState([]);

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
			<Appbar style={styles.appbar}>
				<Appbar.BackAction onPress={() => navigation.goBack()} />

				<View style={styles.right}>
					<TouchableOpacity
						style={styles.lang}
						onPress={() => {
							navigation.navigate("SearchUs");
						}}
					>
						<Text style={{ color: "#ffffff" }}>US</Text>
					</TouchableOpacity>
					<TouchableOpacity
						style={styles.lang}
						onPress={() => {
							navigation.navigate("SearchGb");
						}}
					>
						<Text style={{ color: "#ffffff" }}>GB</Text>
					</TouchableOpacity>
				</View>
			</Appbar>
			<TextInput
				placeholder="Search"
				value={searchValue}
				onChange={(e) => setSearchValue(e.target.value)}
				onChangeText={searchHandler}
				placeholderTextColor={"#888888"}
				style={styles.search}
			/>

			<Text style={styles.title}>Search Top News In Us by Term</Text>

			{searchResults ? (
				<FlatList
					data={searchResults}
					renderItem={renderItem}
					keyExtractor={(item) => item.publishedAt}
				/>
			) : (
				errorMessage && <Text style={styles.errMsg}>Error: {errorMessage}</Text>
			)}
		</SafeAreaView>
	);
};


export default searchUs;
