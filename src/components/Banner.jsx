import { StyleSheet, View, Image } from 'react-native';

const Banner = () => {
	return (
		<View style={styles.container}>
			<Image source={require('../assets/banner/banner.jpg')} style={styles.image} />
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		justifyContent: 'space-around',
		marginBottom: 10,
	},
	image: {
		width: 330,
		height: 170,
		borderRadius: 10,
	},
});

export default Banner;
