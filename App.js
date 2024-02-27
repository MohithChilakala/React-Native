import { SafeAreaView, StyleSheet, StatusBar } from 'react-native';
import Navigation from './src/Navigation';

export default function App() {
	return (
		<SafeAreaView style={styles.appContainer}>
			<StatusBar backgroundColor='#fff' barStyle='dark-content' />
			<Navigation />
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	appContainer: {
		flex: 1,
		backgroundColor: '#fff',
	},
});
