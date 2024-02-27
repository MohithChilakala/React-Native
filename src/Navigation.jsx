import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './screens/Home';
import Restaurant from './screens/Restaurant';
import Category from './screens/Category';
import Profile from './screens/Profile';

const Stack = createNativeStackNavigator();

const Navigation = () => {
	return (
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen name='Home' component={Home} options={{ headerShown: false }} />
				<Stack.Screen name='Profile' component={Profile} />
				<Stack.Screen name='Restaurant' component={Restaurant} />
				<Stack.Screen name='Category' component={Category} />
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default Navigation;
