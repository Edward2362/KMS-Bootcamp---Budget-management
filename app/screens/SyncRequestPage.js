import React, { useState } from "react";
import {
	ImageBackground,
	StyleSheet,
	View,
	TouchableOpacity,
	Text,
} from "react-native";

function SyncRequestPage(props) {
	const [isAgree, setIsAgree] = useState(false);

	return (
		<View style={styles.background}>
			<View style={styles.title}>
				<Text style={styles.titleText}>
					This action will allow us to access your data in this
					E-commerce platform. Do you want to continue?
				</Text>
			</View>
			<View style={styles.body}>
				<TouchableOpacity
					onPress={() => props.navigation.navigate("Sync")}
					style={styles.option}
				>
					<Text style={styles.buttonText}>No</Text>
				</TouchableOpacity>
				<TouchableOpacity
					// onPress={}
					style={styles.option}
				>
					<Text style={styles.buttonText}>Yes</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	background: { flex: 1, width: "100%" },
	title: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
	titleText: {
		color: "skyblue",
		fontWeight: "bold",
		fontSize: 15,
	},
	body: {
		flex: 2,
		alignItems: "center",
		width: "100%",
		flexDirection: "row",
		flexWrap: "wrap",
		justifyContent: "space-evenly",
	},
	option: {
		borderRadius: 40,
		width: "40%",
		height: 50,
		alignItems: "center",
		justifyContent: "center",
		marginTop: 20,
		backgroundColor: "steelblue",
	},
	buttonText: {
		color: "#fff",
		fontWeight: "bold",
	},
});

export default SyncRequestPage;
