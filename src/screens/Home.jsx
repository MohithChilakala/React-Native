import { StyleSheet, ScrollView } from 'react-native';
import Header from '../components/Header';
import Banner from '../components/Banner';
import TopRated from '../components/TopRated';
import Category from '../components/Category';
import Restaurants from '../components/Restaurants';

const Home = ({ navigation }) => {
	return (
		<ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
			<Header navigation={navigation} />
			<Banner />
			<TopRated navigation={navigation} />
			<Category navigation={navigation} />
			<Restaurants navigation={navigation} />
		</ScrollView>
	);
};

const styles = StyleSheet.create({
	container: {
		padding: 10,
	},
});

export default Home;
