import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
import restaurant_image from '../assets/banner/banner.jpg';

const Restaurant = (props) => {
	return (
		<Pressable
			style={styles.restaurantContainer}
			onPress={() => props.navigation.navigate('Restaurant', { props: props })}
		>
			<Image source={props.image} style={styles.image} />
			<View style={styles.restaurantInfoContainer}>
				<Text style={{ fontSize: 20, fontWeight: 'bold' }}>{props.name}</Text>
				<Text style={{ fontSize: 16, fontWeight: 'bold' }}>
					⭐ {props.rating} ● {props.deliveryTime - 5}-{props.deliveryTime + 5} mins
				</Text>
				<Text>{props.foods.map((food, index) => food + '  ')}</Text>
				<Text>
					{props.location} ● {props.distance} km
				</Text>
			</View>
		</Pressable>
	);
};

const Restaurants = ({ navigation }) => {
	return (
		<View style={styles.container}>
			<Text style={styles.text}>Restaurants</Text>
			{Array.from({ length: 4 }, (ignore, index) => (
				<Restaurant
					key={index}
					image={restaurant_image}
					name={'Restaurant name'}
					rating={4.5}
					deliveryTime={30}
					foods={['Biriyani', 'Kebab']}
					location={'Uttarahalli'}
					distance={3.5}
					navigation={navigation}
				/>
			))}
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flexDirection: 'column',
		marginBottom: 10,
	},
	text: {
		fontWeight: 'bold',
		fontSize: 18,
		marginBottom: 10,
	},
	restaurantContainer: {
		flexDirection: 'row',
		marginBottom: 10,
	},
	restaurantInfoContainer: {
		flexDirection: 'column',
		justifyContent: 'center',
		marginLeft: 30,
	},
	image: {
		width: 130,
		height: 150,
		borderRadius: 20,
	},
});

export default Restaurants;
