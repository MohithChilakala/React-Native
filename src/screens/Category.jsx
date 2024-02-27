import { StyleSheet, View, Image, Text } from 'react-native';

const Category = ({ route }) => {
	return (
		<View style={styles.container}>
			<Image source={route.params.image} style={styles.image} />
			<Text style={styles.text}>Looks Tasty Order for me bro</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		marginBottom: 100
	},
	image: {
		width: 350,
		height: 250,
		borderRadius: 10,
	},
	text: {
		fontSize: 20,
		padding: 10,
	},
});

export default Category;
