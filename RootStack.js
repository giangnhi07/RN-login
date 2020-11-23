import React from 'react';
import { View, Text } from 'react-native';
import {} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();


export default function RootStack() {
	return (
		<Stack.Navigator>
           <Stack.screen name="Swiper" component={}/>     
           <Stack.screen /> 
        </Stack.Navigator>
			
	);
}
