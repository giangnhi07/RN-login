import React, { useState, useEffect, useContext } from 'react';
import {
	StyleSheet,
	Text,
	View,
	Button,
	ActivityIndicator,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import AsyncStorage from '@react-native-async-storage/async-storage';

import MainTabScreen from './screens/MainTabScreen';
import SettingsScreen from './screens/SettingsScreen';
import SupportScreen from './screens/SupportScreen';
import BookmarkScreen from './screens/BookmarkScreen';

import { DrawerContent } from './screens/DrawerContent';
import RootStackScreen from './screens/RootStackScreen';

import { AuthContext } from './utils/context';

const Drawer = createDrawerNavigator();

function App() {
	const initialLoginState = {
		isLoading: true,
		userToken: null,
		userName: null,
	};

	const [LoginState, setLoginState] = useState(initialLoginState);

	const authContext = {
		SignIn: async (username, password) => {
			if (username === 'nam' && password === 'password') {
				setLoginState({
					...LoginState,
					isLoading: false,
					userToken: 'fghj',
					userName: username,
				});
			}
			try {
				await AsyncStorage.setItem('userToken', 'fghj');
			} catch (e) {
				console.log(e);
			}
		},
		SignOut: () => {
			setLoginState({
				...LoginState,
				isLoading: false,
				userToken: null,
				userToken: null,
			});
			try {
				await AsyncStorage.removeItem('userToken');
			} catch (e) {
				console.log(e);
			}
		},
		RetrieveToken: (userToken) => {
			setLoginState({
				...LoginState,
				isLoading: false,
				userToken: userToken,
			});
		},
	};

	useEffect(() => {
		setTimeout(async () => {
			let userToken;
			userToken = null;
			try {
				userToken = await AsyncStorage.getItem('userToken');
			} catch (e) {
				console.log(e);
			}
			setLoginState({
				...LoginState,
				userToken: userToken,
				isLoading: false,
			});
		}, 1000);
	}, []);

	if (LoginState.isLoading) {
		return (
			<View
				style={{
					flex: 1,
					justifyContent: 'center',
					alignItems: 'center',
				}}
			>
				<ActivityIndicator size="large" color="#009387" />
			</View>
		);
	}

	return (
		<AuthContext.Provider value={authContext}>
			<NavigationContainer>
				{LoginState.userToken !== null ? (
					<Drawer.Navigator
						drawerContent={(props) => <DrawerContent {...props} />}
					>
						<Drawer.Screen
							name="HomeDrawer"
							component={MainTabScreen}
						/>
						<Drawer.Screen
							name="SettingsScreen"
							component={SettingsScreen}
						/>
						<Drawer.Screen
							name="SupportScreen"
							component={SupportScreen}
						/>
						<Drawer.Screen
							name="BookmarkScreen"
							component={BookmarkScreen}
						/>
					</Drawer.Navigator>
				) : (
					<RootStackScreen />
				)}
			</NavigationContainer>
		</AuthContext.Provider>
	);
}
export default App;
