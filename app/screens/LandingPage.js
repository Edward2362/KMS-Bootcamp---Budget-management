import React from "react";
import { ImageBackground, StyleSheet, View, Button, Text } from "react-native";

function LandingPage(props) {
	return (
		<ImageBackground
			style={styles.background}
			source={require("../assets/background.jpg")}
		>
			<View style={styles.appTitle}>
				<Text>Budget Management</Text>
			</View>
			<View style={styles.navs}>
				<Button
					style={styles.nav}
					title="Go to Jane's profile"
					onPress={() => props.navigation.navigate("Sync")}
				/>
				{/* <Button
					style={styles.nav}
					title="Go to Jane's profile"
					onPress={() =>
						props.navigation.navigate("Profile", { name: "Jane" })
					}
				/>
				<Button
					style={styles.nav}
					title="Go to Jane's profile"
					onPress={() =>
						props.navigation.navigate("Profile", { name: "Jane" })
					}
				/> */}
			</View>
		</ImageBackground>
	);
}

const styles = StyleSheet.create({
	background: {
		flex: 1,
	},
	appTitle: { flex: 1, justifyContent: "center", alignItems: "center" },
	navs: {
		flex: 2,
		justifyContent: "space-evenly",
		alignItems: "center",
	},
	nav: {
		height: "15%",
		width: "50%",
		backgroundColor: "powderblue",
		justifyContent: "center",
		alignItems: "center",
		borderRadius: 20,
	},
	// nav1: { flex: 1, width: "50%", height: "50%", backgroundColor: "#fff" },
	// nav2: { flex: 1, width: "50%", height: "50%", backgroundColor: "#000" },
});

export default LandingPage;
