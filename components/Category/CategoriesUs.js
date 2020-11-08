import React, { useState, useEffect } from "react";
import { Card, Title, Paragraph } from "react-native-paper";
("react-native");
import {
	StatusBar,
	Text,
	View,
	FlatList,
	ScrollView,
	TouchableOpacity,
} from "react-native";
import styles from "./style";

import Colors from "../../constants/Colors";
import Env from "../../constants/Env";
import { useNavigation } from "@react-navigation/native";
import { Appbar } from "react-native-paper";
function CategoriesUs() {
	const [newsDataEnt, setNewsDataEnt] = useState();
	const [newsDataGen, setNewsDataGen] = useState();
	const [newsDataHel, setNewsDataHel] = useState();
	const [newsDataSci, setNewsDataSci] = useState();
	const [category, setCategory] = useState();
	const [newsDataTech, setNewsDataTech] = useState();

	const [errorMessage, setErrorMessage] = useState();
	const navigation = useNavigation();

	const load = async () => {
		try {
			const newsApientertaiment = `http://newsapi.org/v2/top-headlines?country=us&category=entertainment&pageSize=10&apiKey=${Env.NEWS_API_KEY}`;

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
			const newsApiGen = `http://newsapi.org/v2/top-headlines?country=us&category=general&pageSize=10&apiKey=${Env.NEWS_API_KEY}`;

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
			const newsApiHel = `http://newsapi.org/v2/top-headlines?country=us&category=health&pageSize=10&apiKey=${Env.NEWS_API_KEY}`;

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

	const load5 = async () => {
		try {
			const newsApiTech = `http://newsapi.org/v2/top-headlines?country=us&category=technology&pageSize=10&apiKey=${Env.NEWS_API_KEY}`;

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
				<Appbar.BackAction onPress={() => navigation.goBack("main")} />

				<View style={styles.right}>
					<TouchableOpacity
						style={styles.lang}
						onPress={() => {
							navigation.navigate("Categories");
						}}
					>
						<Text style={{ color: "#ffffff" }}>US</Text>
					</TouchableOpacity>

					<TouchableOpacity
						style={styles.lang}
						onPress={() => {
							navigation.navigate("CategoriesGb");
						}}
					>
						<Text style={{ color: "#ffffff" }}>GB</Text>
					</TouchableOpacity>
				</View>
			</Appbar>
			<ScrollView>
				<Text style={styles.header}>Top News for Categories in Us</Text>

				<TouchableOpacity
					onPress={() => {
						/* 1. Navigate to the Details route with params */
						navigation.navigate("entertaimentUS");
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
						navigation.navigate("generalUs");
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
						navigation.navigate("healthUs");
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
				<TouchableOpacity onPress={() => navigation.navigate("scienceUs")}>
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
				<TouchableOpacity onPress={() => navigation.navigate("techUs")}>
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

export default CategoriesUs;
