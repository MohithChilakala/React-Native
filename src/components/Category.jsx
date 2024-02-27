import { StyleSheet, View, Text, ScrollView, Image, Pressable } from 'react-native';
import biryani from '../assets/Categories/biryani.png';
import burger from '../assets/Categories/burger.png';
import pizza from '../assets/Categories/pizza.png';
import ice_cream from '../assets/Categories/ice-cream.png';

const Category = ({ navigation }) => {
	const items = [
		[biryani, pizza],
		[burger, ice_cream],
		[pizza, biryani],
		[ice_cream, burger],
		[biryani, pizza],
		[burger, ice_cream],
		[pizza, biryani],
		[ice_cream, burger],
	];

	return (
		<View style={styles.container}>
			<Text style={styles.text}>What's On Your Mind</Text>
			<ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
				{items.map((item, index) => (
					<View key={index} style={styles.categoryColumn}>
						<Pressable onPress={() => navigation.navigate('Category', { image: item[0] })}>
							<View style={styles.imageContainer}>
								<Image source={item[0]} style={styles.image} />
							</View>
						</Pressable>
						<Pressable onPress={() => navigation.navigate('Category', { image: item[1] })}>
							<View style={styles.imageContainer}>
								<Image source={item[1]} style={styles.image} />
							</View>
						</Pressable>
					</View>
				))}
			</ScrollView>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		margin: 10,
	},
	text: {
		fontWeight: 'bold',
		fontSize: 18,
		marginBottom: 10,
	},
	categoryColumn: {
		marginRight: 10,
	},
	imageContainer: {
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#bbfa',
		borderRadius: 100,
		width: 90,
		height: 90,
		marginBottom: 15,
	},
	image: {
		width: 60,
		height: 60,
		padding: 10,
	},
});

export default Category;
