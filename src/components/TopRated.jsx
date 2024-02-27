import { StyleSheet, View, Text, ScrollView, Image, Pressable } from 'react-native';
import banner from '../assets/banner/banner.jpg';

const TopRated = ({ navigation }) => {
	return (
		<View style={styles.container}>
			<Text style={styles.text}>Top rated</Text>
			<ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
				{Array.from({ length: 6 }).map((ignore, index) => (
					<Pressable
						key={index}
						onPress={() => navigation.navigate('Restaurant', { props: { image: banner } })}
					>
						<Image source={banner} style={styles.image} />
					</Pressable>
				))}
			</ScrollView>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		marginTop: 10,
		marginBottom: 10,
	},
	text: {
		fontWeight: 'bold',
		fontSize: 18,
		marginBottom: 10,
	},
	image: {
		width: 250,
		height: 200,
		borderRadius: 10,
		marginLeft: 8,
		marginRight: 8,
	},
});

export default TopRated;
