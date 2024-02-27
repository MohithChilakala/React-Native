import { StyleSheet, View, Text, Button } from 'react-native';

const Profile = ({ route }) => {
	return (
		<View style={styles.container}>
			<Text>This is {route.params.name}'s Profile</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
});

export default Profile;
