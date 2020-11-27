import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import HomeScreen from './screens/HomeScreen';
import DetailsScreen from './screens/DetailsScreen';

const HomeStack = createStackNavigator();

const HomeStackScreen = ({ navigation }) => {
	return (
		<HomeStack.Navigator
			screenOptions={{
				headerStyle: {
					backgroundColor: '#f4511e',
				},
				headerTintColor: '#fff',
				headerTitleStyle: {
					fontWeight: 'bold',
				},
			}}
		>
			<HomeStack.Screen
				name="Home"
				component={HomeScreen}
				options={{
					headerLeft: () => (
						<Icon.Button
							name="menu"
							size={25}
							backgroundColor="#f4511e"
							onPress={() => {
								navigation.openDrawer();
							}}
						></Icon.Button>
					),
				}}
			/>
		</HomeStack.Navigator>
	);
};

const DetailsStack = createStackNavigator();

const DetailsStackScreen = ({ navigation }) => {
	return (
		<DetailsStack.Navigator
			screenOptions={{
				headerStyle: {
					backgroundColor: '#f4511e',
				},
				headerTintColor: '#fff',
				headerTitleStyle: {
					fontWeight: 'bold',
				},
			}}
		>
			<DetailsStack.Screen
				name="Details"
				component={DetailsScreen}
				options={{
					headerLeft: () => (
						<Icon.Button
							name="menu"
							size={25}
							backgroundColor="#f4511e"
							onPress={() => {
								navigation.openDrawer();
							}}
						></Icon.Button>
					),
				}}
			/>
		</DetailsStack.Navigator>
	);
};

const Drawer = createDrawerNavigator();

function App() {
	return (
		<NavigationContainer>
			<Drawer.Navigator initialRouteName="Home">
				<Drawer.Screen name="Home" component={HomeStackScreen} />
				<Drawer.Screen name="Details" component={DetailsStackScreen} />
			</Drawer.Navigator>
		</NavigationContainer>
	);
}
export default App;
