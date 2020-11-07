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
import entertaimentUS from "./components/uscat/entertaiment";
import generalUs from "./components/uscat/general";
import healthUs from "./components/uscat/health";
import scienceUs from "./components/uscat/science";
import techUs from "./components/uscat/technology";
import entertaimentGb from "./components/gbcat/entertaiment";
import generalGb from "./components/gbcat/general";
import healthGb from "./components/gbcat/health";
import scienceGb from "./components/gbcat/science";
import techGb from "./components/gbcat/technology";
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
