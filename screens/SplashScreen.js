import React from 'react';
import { View, Text, TouchableOpacity, Dimensions, StyleSheet} from 'react-native';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import * as Animatable from 'react-native-animatable';

const SplashScreen = ({ navigation }) => {
	return (
		<View style={styles.container}>
			<View style={styles.header}>
				<Animatable.Image
					animation="bounce"
					style={styles.Image}
					source={require('../assets/logo.png')}
					resizeMode="stretch"
				/>
			</View>
			<Animatable.View animation="bounceInUp" style={styles.footer}>
				<Text style={styles.title}>Stay connect with everyone!</Text>
				<Text style={styles.text}>Sign in with account</Text>
				<TouchableOpacity style={styles.button} onPress={() => navigation.navigate('SignInScreen')}>
					<View style={styles.signIn}>
						<Text style={styles.textSign}>Get started</Text>
						<MaterialIcons name="navigate-next" color="#fff" size={20} />
					</View>
				</TouchableOpacity>
			</Animatable.View>
		</View>
	);
};

export default SplashScreen;

const { height } = Dimensions.get('screen');
const height_logo = height * 0.28;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#009387',
	},
	header: {
		flex: 2,
		justifyContent: 'center',
		alignItems: 'center',
	},
	footer: {
		flex: 1,
		backgroundColor: '#fff',
		borderTopLeftRadius: 30,
		borderTopRightRadius: 30,
		paddingVertical: 50,
		paddingHorizontal: 30,
	},
	logo: {
		width: height_logo,
		height: height_logo,
	},
	title: {
		color: '#05375a',
		fontSize: 30,
		fontWeight: 'bold',
	},
	text: {
		color: 'grey',
		marginTop: 5,
	},
	button: {
		alignItems: 'flex-end',
		marginTop: 30,
	},
	signIn: {
		width: 150,
		height: 40,
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 50,
		flexDirection: 'row',
		backgroundColor: '#009387',
	},
	textSign: {
		color: 'white',
		fontWeight: 'bold',
	},
});
