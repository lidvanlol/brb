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
	SafeAreaView,
} from "react-native";
import styles from '../style'
import Colors from "../../../constants/Colors";
import Env from "../../../constants/Env";
import { useNavigation } from "@react-navigation/native";
import { Appbar } from "react-native-paper";
function scienceGb() {
	const [newsDataSci, setNewsDataSci] = useState();

	const [errorMessage, setErrorMessage] = useState();
	const navigation = useNavigation();

	const load = async () => {
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

	useEffect(() => {
		load();
	}, []);
	const NewsCards = ({ title, description, urlToImage, content }) => {
		const navigation = useNavigation();
		return (
			<>
				<StatusBar backgroundColor={Colors.primary} barStyle="default" />
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
					<TouchableOpacity
						style={styles.lang}
						onPress={() => {
							navigation.navigate("scienceUs");
						}}
					>
						<Text style={{ color: "#ffffff" }}>US</Text>
					</TouchableOpacity>
					<TouchableOpacity
						style={styles.lang}
						onPress={() => {
							navigation.navigate("scienceGb");
						}}
					>
						<Text style={{ color: "#ffffff" }}>GB</Text>
					</TouchableOpacity>
				</View>
			</Appbar>
			<ScrollView>
				<Text style={styles.header}>Top News Science in Gb</Text>
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


export default scienceGb;
