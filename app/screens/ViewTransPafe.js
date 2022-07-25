import React, { useState } from "react";
import {
	StyleSheet,
	TextInput,
	View,
	Button,
	Text,
	TouchableHighlight,
	ScrollView,
} from "react-native";

function ViewTransPafe(props) {
	const [transactions, setTransactions] = useState([]);

	return (
		<ScrollView style={styles.background}>
			<View style={styles.body}>
				<Text>View Tran</Text>
			</View>
			<View style={styles.body}>
				<Text>View Tran</Text>
			</View>
		</ScrollView>
	);
}

const styles = StyleSheet.create({
	background: { flex: 1 },
	body: { flex: 1, justifyContent: "center", alignItems: "center" },
});

export default ViewTransPafe;
