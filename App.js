import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import NewsDetails from "./components/NewsDetails";
import main from "./components/TopNews";
import mainGB from "./components/TopNewsGb";
import Home from "./components/Home";
import Search from "./components/Search";
import Categories from "./components/Categories";
import CategoriesGb from "./components/CategoriesGb";
const Stack = createStackNavigator();

function App() {
	return (
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen
					name="Home"
					component={Home}
					options={{ headerShown: false }}
				/>
				<Stack.Screen
					name="main"
					component={main}
					options={{ headerShown: false }}
				/>
				<Stack.Screen
					name="mainGB"
					component={mainGB}
					options={{ headerShown: false }}
				/>
				<Stack.Screen
					name="Categories"
					component={Categories}
					options={{ headerShown: false }}
				/>
				<Stack.Screen
					name="CategoriesGb"
					component={CategoriesGb}
					options={{ headerShown: false }}
				/>
				<Stack.Screen name="NewsDetails" component={NewsDetails} />
				<Stack.Screen
					name="Search"
					component={Search}
					options={{ headerShown: false }}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
}

export default App;
