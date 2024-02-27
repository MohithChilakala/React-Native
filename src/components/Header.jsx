import { useState } from 'react';
import { StyleSheet, Text, View, Image, Pressable } from 'react-native';

import male from '../assets/Profile/male.png';
import female from '../assets/Profile/female.png';

const Header = ({ navigation }) => {
	const [gender, setGender] = useState('male');

	return (
		<View style={styles.container}>
			<View>
				<Image source={require('../assets/logo/logo.jpg')} style={styles.icon} />
			</View>
			<View>
				<Text style={styles.text}>Food Delivery</Text>
			</View>
			<Pressable
				onPress={() => {
					navigation.navigate('Profile', { name: 'Mohith' });
				}}
			>
				{gender === 'male' ? (
					<Image source={male} style={styles.icon} />
				) : (
					<Image source={female} style={styles.icon} />
				)}
			</Pressable>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginBottom: 10,
	},
	text: {
		color: 'black',
		fontWeight: 'bold',
		fontSize: 25,
		marginTop: 10,
	},
	icon: {
		width: 50,
		height: 50,
		borderRadius: 100,
	},
});

export default Header;
