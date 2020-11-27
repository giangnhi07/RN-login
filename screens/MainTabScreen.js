import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import { MaterialCommunityIcons } from 'react-native-vector-icons';

import HomeScreen from './HomeScreen';
import DetailsScreen from './DetailsScreen';
import ProfileScreen from './ProfileScreen';
import ExploreScreen from './ExploreScreen';

const Tab = createMaterialBottomTabNavigator();

const MainTabScreen = () => {
	return (
		<Tab.Navigator initialRouteName="Home" activeColor="#fff">
			<Tab.Screen
				name="Home"
				component={HomeStackScreen}
				options={{
					tabBarLabel: 'Home',
					tabBarColor: '#f4511e',
					tabBarIcon: ({ color }) => <MaterialCommunityIcons name="home" color={color} size={26} />,
				}}
			/>
			<Tab.Screen
				name="DetailsS"
				component={DetailsStackScreen}
				options={{
					tabBarLabel: 'DetailsS',
					tabBarColor: '#1f65ff',
					tabBarIcon: ({ color }) => <MaterialCommunityIcons name="bell" color={color} size={26} />,
				}}
			/>
			<Tab.Screen
				name="Profile"
				component={ProfileScreen}
				options={{
					tabBarLabel: 'Profile',
					tabBarColor: '#694fad',
					tabBarIcon: ({ color }) => <MaterialCommunityIcons name="account" color={color} size={26} />,
				}}
			/>
			<Tab.Screen
				name="Explore"
				component={ExploreScreen}
				options={{
					tabBarLabel: 'Explore',
					tabBarColor: '#009387',
					tabBarIcon: ({ color }) => <MaterialCommunityIcons name="account" color={color} size={26} />,
				}}
			/>
		</Tab.Navigator>
	);
};

const HomeStack = createStackNavigator();
const DetailsStack = createStackNavigator();

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
						<MaterialCommunityIcons.Button
							name="menu"
							size={25}
							backgroundColor="#f4511e"
							onPress={() => {
								navigation.openDrawer();
							}}
						></MaterialCommunityIcons.Button>
					),
				}}
			/>
		</HomeStack.Navigator>
	);
};

const DetailsStackScreen = ({ navigation }) => {
	return (
		<DetailsStack.Navigator
			screenOptions={{
				headerStyle: {
					backgroundColor: '#1f65ff',
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
						<MaterialCommunityIcons.Button
							name="menu"
							size={25}
							backgroundColor="#1f65ff"
							onPress={() => {
								navigation.openDrawer();
							}}
						></MaterialCommunityIcons.Button>
					),
				}}
			/>
		</DetailsStack.Navigator>
	);
};

export default MainTabScreen;
