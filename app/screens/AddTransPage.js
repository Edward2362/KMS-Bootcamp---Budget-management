import React, { useState } from "react";
import {
	StyleSheet,
	TextInput,
	View,
	Button,
	Text,
	TouchableHighlight,
} from "react-native";

function AddTransPage(props) {
	const [thirdPartyAcc, setThirdPartyAcc] = useState("");
	const [description, setDescription] = useState("");
	const [price, setPrice] = useState("");
	const [date, setDate] = useState("");

	return (
		<View style={styles.background}>
			<View style={styles.title}>
				<Text>Add a new transaction</Text>
			</View>
			<View style={styles.body}>
				<TextInput
					style={styles.input}
					onChangeText={setDescription}
					value={description}
					placeholder="Description"
					keyboardType="default"
				/>
				<TextInput
					style={styles.input}
					onChangeText={setPrice}
					value={price}
					placeholder="Price"
					keyboardType="numeric"
				/>
				<TouchableHighlight
					onPress={() => props.navigation.navigate("Home")}
					style={styles.submit}
				>
					<View style={styles.submitView}>
						<Text style={styles.submitText}>
							Synchronize E-commerce
						</Text>
					</View>
				</TouchableHighlight>
			</View>
		</View>
	);
}
const styles = StyleSheet.create({
	background: { flex: 1 },
	title: { flex: 1, justifyContent: "center", alignItems: "center" },
	body: { flex: 4, justifyContent: "center", alignItems: "center" },
	input: {
		width: "80%",
		height: 40,
		margin: 12,
		borderWidth: 1,
		padding: 10,
	},
	submit: {
		width: "80%",
		height: 40,
		margin: 12,
		paddingTop: 10,
		paddingBottom: 10,
		backgroundColor: "steelblue",
		justifyContent: "center",
		alignItems: "center",
	},
	submitView: {
		width: "100%",
		height: 40,
		backgroundColor: "steelblue",
		justifyContent: "center",
		alignItems: "center",
	},
	submitText: {
		color: "#fff",
		fontWeight: "bold",
	},
});

export default AddTransPage;
