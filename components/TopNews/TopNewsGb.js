import React, { useState, useEffect } from "react";
import {
	
	StatusBar,
	Text,
	View,
	FlatList,
	TouchableOpacity,
	SafeAreaView,
	
} from "react-native";
import NewsCards from "../NewsCard/NewsCards";

import Env from "../../constants/Env";
import { useNavigation } from "@react-navigation/native";
import { Appbar } from "react-native-paper";
import styles from "./style";
const mainGb = () => {
	const [newsData, setNewsData] = useState();
	const [errorMessage, setErrorMessage] = useState();
	const navigation = useNavigation();

	const load = async () => {
		try {
			const newsApi = `http://newsapi.org/v2/top-headlines?country=gb&apiKey=${Env.NEWS_API_KEY}`;
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
			<StatusBar
				backgroundColor={Colors.primary}
				barStyle="default"
				
			/>
			<Appbar>
				<Appbar.BackAction onPress={() => navigation.goBack()} />

				<View style={styles.right}>
					<TouchableOpacity
						style={styles.lang}
						onPress={() => {
							/* 1. Navigate to the Details route with params */
							navigation.navigate("TopNewsUs");
						}}
					>
						<Text style={{ color: "#ffffff" }}>US</Text>
					</TouchableOpacity>
					<TouchableOpacity
						style={styles.lang}
						onPress={() => {
							/* 1. Navigate to the Details route with params */
							navigation.navigate("TopNewsGb");
						}}
					>
						<Text style={{ color: "#ffffff" }}>GB</Text>
					</TouchableOpacity>
				</View>
			</Appbar>
			<View>
				<Text style={styles.header}>Top News GB</Text>
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


export default mainGb;
