import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import MainTabScreen from './screens/MainTabScreen';
import SettingsScreen from './screens/SettingsScreen';
import SupportScreen from './screens/SupportScreen';
import BookmarkScreen from './screens/BookmarkScreen';

import { DrawerContent } from './screens/DrawerContent';
import RootStackScreen from './screens/RootStackScreen';


const Drawer = createDrawerNavigator();

function App() {
	return (
		<NavigationContainer>
			<RootStackScreen />
			{/* <Drawer.Navigator drawerContent={(props) => <DrawerContent {...props} />} >
				<Drawer.Screen name="HomeDrawer" component={MainTabScreen} />
				<Drawer.Screen name="SettingsScreen" component={SettingsScreen} />
				<Drawer.Screen name="SupportScreen" component={SupportScreen} />
				<Drawer.Screen name="BookmarkScreen" component={BookmarkScreen} />
			</Drawer.Navigator> */}
		</NavigationContainer>
	);
}
export default App;
