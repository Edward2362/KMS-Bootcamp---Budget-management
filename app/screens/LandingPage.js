import React from "react";
import {
	ImageBackground,
	StyleSheet,
	View,
	TouchableHighlight,
	Text,
} from "react-native";

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
				<TouchableHighlight
					onPress={() => props.navigation.navigate("Sync")}
					style={styles.nav}
				>
					<View style={styles.nav}>
						<Text style={styles.navText}>
							Synchronize E-commerce
						</Text>
					</View>
				</TouchableHighlight>
				<TouchableHighlight
					onPress={() => props.navigation.navigate("AddTransaction")}
					style={styles.nav}
				>
					<View style={styles.nav}>
						<Text style={styles.navText}>Add transaction</Text>
					</View>
				</TouchableHighlight>
				<TouchableHighlight
					onPress={() => props.navigation.navigate("Sync")}
					style={styles.nav}
				>
					<View style={styles.nav}>
						<Text style={styles.navText}>View transaction</Text>
					</View>
				</TouchableHighlight>
			</View>
		</ImageBackground>
	);
}

const styles = StyleSheet.create({
	background: {
		flex: 1,
	},
	appTitle: { flex: 1.5, justifyContent: "center", alignItems: "center" },
	navs: {
		flex: 2,
		justifyContent: "space-evenly",
		alignItems: "center",
	},
	nav: {
		height: 70,
		width: 200,
		backgroundColor: "steelblue",
		justifyContent: "center",
		alignItems: "center",
		borderRadius: 50,
	},
	navText: {
		color: "skyblue",
		fontWeight: "bold",
	},
	// nav1: { flex: 1, width: "50%", height: "50%", backgroundColor: "#fff" },
	// nav2: { flex: 1, width: "50%", height: "50%", backgroundColor: "#000" },
});

export default LandingPage;
