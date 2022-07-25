import React, { useState } from "react";
import {
	StyleSheet,
	TextInput,
	View,
	Image,
	Text,
	TouchableOpacity,
} from "react-native";

function SyncEAPage(props) {
	const [thirdPartyAcc, setThirdPartyAcc] = useState("");

	return (
		<View style={styles.background}>
			<View style={styles.title}>
				<Text>Add new E-commerce account</Text>
			</View>
			<View style={styles.body}>
				<View style={styles.container}>
					<TouchableOpacity
						onPress={() => props.navigation.navigate("SyncRequest")}
						style={styles.option}
					>
						<Image source={require("../assets/Shopee.png")}></Image>
					</TouchableOpacity>
					<TouchableOpacity
						onPress={() => props.navigation.navigate("SyncRequest")}
						style={styles.option}
					>
						<Image source={require("../assets/Tiki.png")}></Image>
					</TouchableOpacity>
					<TouchableOpacity
						onPress={() => props.navigation.navigate("SyncRequest")}
						style={styles.option}
					>
						<Image source={require("../assets/Amazon.png")}></Image>
					</TouchableOpacity>
				</View>
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
	body: {
		flex: 2,
		alignItems: "center",
		width: "100%",
	},
	container: { width: "100%", flexDirection: "row", flexWrap: "wrap" },
	option: {
		borderRadius: 40,
		width: "50%",
		alignItems: "center",
		marginTop: 20,
	},
});
export default SyncEAPage;
