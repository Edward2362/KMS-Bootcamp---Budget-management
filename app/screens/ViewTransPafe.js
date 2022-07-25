import React, { useState, useEffect } from "react";
import {
	StyleSheet,
	TextInput,
	View,
	Button,
	Text,
	TouchableHighlight,
	ScrollView,
} from "react-native";
import Transaction from "../components/Transaction";

function ViewTransPafe(props) {
	const [physicalTransactions, setPhysicalTransactions] = useState([
		{ product: "Kem", quantity: 2, price: 5000 },
		{ product: "Kem", quantity: 2, price: 10000 },
		{ product: "Kem", quantity: 2, price: 10000 },
		{ product: "Kem", quantity: 2, price: 10000 },
		{ product: "Kem", quantity: 2, price: 10000 },
		{ product: "Kem", quantity: 2, price: 10000 },
	]);
	const [digitalTransactions, setDigitalTransactions] = useState([
		{ product: "Kem", quantity: 2, price: 10000 },
		{ product: "Kem", quantity: 2, price: 10000 },
		{ product: "Kem", quantity: 2, price: 10000 },
		{ product: "Kem", quantity: 2, price: 10000 },
	]);
	const [totalPayment, setTotalPayment] = useState(12);

	useEffect(() => {
		var total = 0;
		physicalTransactions.forEach((transaction) => {
			total += transaction.price * transaction.quantity;
		});
		digitalTransactions.forEach((transaction) => {
			total += transaction.price * transaction.quantity;
		});
		setTotalPayment(total);
	});

	return (
		<ScrollView style={styles.background}>
			<View style={styles.title}>
				<View style={styles.titleBody}>
					<Text style={styles.titleText}>
						Total payment: {totalPayment} VND
					</Text>
				</View>
			</View>
			<View style={styles.body}>
				<View style={styles.container}>
					<Text style={styles.sectionTitle}>
						Physical transactions
					</Text>
					<View style={styles.section}>
						{physicalTransactions.map((transaction, index) => (
							<Transaction
								key={index}
								transaction={transaction}
							/>
						))}
					</View>
				</View>
				<View style={styles.container}>
					<Text style={styles.sectionTitle}>
						Digital transactions
					</Text>
					<View style={styles.section}>
						{digitalTransactions.map((transaction, index) => (
							<Transaction
								key={index}
								transaction={transaction}
							/>
						))}
					</View>
				</View>
			</View>
		</ScrollView>
	);
}

const styles = StyleSheet.create({
	background: { flex: 1 },
	title: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		width: "100%",
	},
	titleBody: {
		width: "90%",
		margin: "5%",
		backgroundColor: "steelblue",
		padding: "5%",
		borderRadius: 50,
	},
	titleText: { color: "#fff", fontWeight: "bold", fontSize: 15 },
	body: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		width: "100%",
	},
	container: { width: "100%" },
	section: {
		width: "100%",
		alignItems: "center",
	},
	sectionTitle: {
		margin: "5%",
		fontWeight: "bold",
		fontSize: 15,
	},
});

export default ViewTransPafe;
