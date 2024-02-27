import { StyleSheet, View, Image, Text } from 'react-native';

const Restaurant = ({ route }) => {
	const props = route.params.props;
	return (
		<View style={styles.container}>
			<Image source={props.image} style={styles.image} />
			<Text style={styles.text}>It's a Nice Restaurant, Order fast</Text>
			<Text>Source: Trust me bro</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		flexDirection: 'column',
	},
	image: {
		width: 350,
		height: 250,
		borderRadius: 10,
		marginTop: 20,
	},
	text: {
		fontSize: 20,
		padding: 10,
	},
});

export default Restaurant;
