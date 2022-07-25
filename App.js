import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import LandingPage from "./app/screens/LandingPage";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SyncEAPage from "./app/screens/SyncEAPage";
import AddTransPage from "./app/screens/AddTransPage";
import ViewTransPafe from "./app/screens/ViewTransPafe";
import SyncRequestPage from "./app/screens/SyncRequestPage";

const Stack = createNativeStackNavigator();

export default function App() {
	return (
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen
					name="Home"
					component={LandingPage}
					options={{ headerShown: false }}
				/>
				<Stack.Screen name="Sync" component={SyncEAPage} />
				<Stack.Screen name="SyncRequest" component={SyncRequestPage} />
				<Stack.Screen name="AddTrans" component={AddTransPage} />
				<Stack.Screen name="ViewTrans" component={ViewTransPafe} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}
