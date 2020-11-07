import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import NewsDetails from "./components/NewsCard/NewsDetails";
import TopNewsUs from "./components/TopNews/TopNewsUs";
import TopNewsGb from "./components/TopNews/TopNewsGb";
import Home from "./components/Home";
import SearchUs from "./components/Search/SearchUs";
import SearchGb from "./components/Search/SearchGb";
import CategoriesUs from "./components/Category/CategoriesUs";
import CategoriesGb from "./components/Category/CategoriesGb";
import entertaimentUS from "./components/SingleCategory/uscat/entertaiment";
import generalUs from "./components/SingleCategory/uscat/general";
import healthUs from "./components/SingleCategory/uscat/health";
import scienceUs from "./components/SingleCategory/uscat/science";
import techUs from "./components/SingleCategory/uscat/technology";
import entertaimentGb from "./components/SingleCategory/gbcat/entertaiment";
import generalGb from "./components/SingleCategory/gbcat/general";
import healthGb from "./components/SingleCategory/gbcat/health";
import scienceGb from "./components/SingleCategory/gbcat/science";
import techGb from "./components/SingleCategory/gbcat/technology";
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
					name="TopNewsUs"
					component={TopNewsUs}
					options={{ headerShown: false }}
				/>
				<Stack.Screen
					name="TopNewsGb"
					component={TopNewsGb}
					options={{ headerShown: false }}
				/>
				<Stack.Screen
					name="CategoriesUs"
					component={CategoriesUs}
					options={{ headerShown: false }}
				/>
				<Stack.Screen
					name="CategoriesGb"
					component={CategoriesGb}
					options={{ headerShown: false }}
				/>
				<Stack.Screen name="NewsDetails" component={NewsDetails} />
				<Stack.Screen
					name="SearchUs"
					component={SearchUs}
					options={{ headerShown: false }}
				/>
				<Stack.Screen
					name="SearchGb"
					component={SearchGb}
					options={{ headerShown: false }}
				/>
				<Stack.Screen
					name="entertaimentUS"
					component={entertaimentUS}
					options={{ headerShown: false }}
				/>
				<Stack.Screen
					name="generalUs"
					component={generalUs}
					options={{ headerShown: false }}
				/>
				<Stack.Screen
					name="healthUs"
					component={healthUs}
					options={{ headerShown: false }}
				/>
				<Stack.Screen
					name="scienceUs"
					component={scienceUs}
					options={{ headerShown: false }}
				/>
				<Stack.Screen
					name="techUs"
					component={techUs}
					options={{ headerShown: false }}
				/>
				<Stack.Screen
					name="entertaimentGb"
					component={entertaimentGb}
					options={{ headerShown: false }}
				/>
				<Stack.Screen
					name="techGb"
					component={techGb}
					options={{ headerShown: false }}
				/>
				<Stack.Screen
					name="scienceGb"
					component={scienceGb}
					options={{ headerShown: false }}
				/>
				<Stack.Screen
					name="healthGb"
					component={healthGb}
					options={{ headerShown: false }}
				/>
				<Stack.Screen
					name="genGb"
					component={generalGb}
					options={{ headerShown: false }}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
}

export default App;
