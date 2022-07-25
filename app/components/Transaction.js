import React from "react";
import {
	StyleSheet,
	TextInput,
	View,
	Button,
	Text,
	TouchableHighlight,
	ScrollView,
} from "react-native";

function Transaction(props) {
	return (
		<View style={styles.background}>
			<Text>{props.transaction.product}</Text>
			<View style={styles.transactionPrice}>
				<Text style={styles.transInfo}>
					quantity: {props.transaction.quantity}
				</Text>
				<Text style={styles.transInfo}>
					{props.transaction.price * props.transaction.quantity} VND
				</Text>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	background: {
		justifyContent: "center",
		width: "90%",
		padding: "5%",
		marginTop: "2.5%",
		marginBottom: "2.5%",
		backgroundColor: "skyblue",
	},
	transactionPrice: {
		width: "100%",
		justifyContent: "space-between",
		flexDirection: "row",
		flexWrap: "wrap",
	},
});

export default Transaction;
