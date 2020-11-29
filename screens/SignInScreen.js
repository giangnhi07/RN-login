import React, { useState, useContext } from 'react';
import {
	View,
	Text,
	TextInput,
	TouchableOpacity,
	StyleSheet,
	Platform,
	Button,
	StatusBar,
} from 'react-native';

import Feather from 'react-native-vector-icons/Feather';
import * as Animatable from 'react-native-animatable';

import { AuthContext } from '../utils/context';

const SignInScreen = ({ navigation, route }) => {
	const [data, setData] = useState({
		username: '',
		password: '',
		check_textInputChange: false,
		secureTextEntry: true,
	});

	const { SignIn } = useContext(AuthContext);

	const textInputChange = (val) => {
		if (val.length > 0) {
			setData({
				...data,
				username: val,
				check_textInputChange: true,
			});
		} else {
			setData({
				...data,
				username: val,
				check_textInputChange: false,
			});
		}
	};

	const handleChangePassword = (val) => {
		setData({
			...data,
			password: val,
		});
	};

	const changeSecureTextEntry = () => {
		setData({
			...data,
			secureTextEntry: !data.secureTextEntry,
		});
	};

	return (
		<View style={styles.container}>
			<StatusBar backgroundColor="#009387" barStyle="light-content" />
			<View style={styles.header}>
				<Text style={styles.text_header}>Welcome!</Text>
			</View>
			<Animatable.View style={styles.footer} animation="bounceInUp">
				<Text style={styles.text_footer}>Email</Text>
				<View style={styles.action}>
					<Feather name="user" size={20} color="green" />
					<TextInput
						style={styles.textInput}
						placeholder="Your Username"
						placeholderTextColor="#666666"
						autoCapitalize="none"
						onChangeText={(val) => textInputChange(val)}
					/>
					{data.check_textInputChange && (
						<Animatable.View animation="bounceIn">
							<Feather
								name="check-circle"
								color="green"
								size={20}
							/>
						</Animatable.View>
					)}
				</View>

				<Text style={[styles.text_footer, { marginTop: 20 }]}>
					Password
				</Text>
				<View style={[styles.action]}>
					<Feather name="lock" size={20} color="green" />
					<TextInput
						style={styles.textInput}
						placeholder="Your Password"
						placeholderTextColor="#666666"
						autoCapitalize="none"
						secureTextEntry={data.secureTextEntry}
						onChangeText={(val) => handleChangePassword(val)}
					/>
					<TouchableOpacity onPress={changeSecureTextEntry}>
						{data.secureTextEntry ? (
							<Feather name="eye-off" color="grey" size={20} />
						) : (
							<Feather name="eye" color="grey" size={20} />
						)}
					</TouchableOpacity>
				</View>
				<View style={styles.button}>
					<TouchableOpacity
						style={[styles.signIn, { backgroundColor: '#009387' }]}
						onPress={() => SignIn(data.username, data.password)}
					>
						<Text style={[styles.textSign, { color: '#fff' }]}>
							Sign in
						</Text>
					</TouchableOpacity>
					<TouchableOpacity
						style={[
							styles.signIn,
							{
								borderColor: '#009387',
								borderWidth: 1,
								marginTop: 15,
							},
						]}
						onPress={() => navigation.navigate('SignUpScreen')}
					>
						<Text style={[styles.textSign, { color: '#009387' }]}>
							Sign up
						</Text>
					</TouchableOpacity>
				</View>
			</Animatable.View>
		</View>
	);
};

export default SignInScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#009387',
	},
	header: {
		flex: 1,
		justifyContent: 'flex-end',
		paddingHorizontal: 20,
		paddingBottom: 50,
	},
	footer: {
		flex: 3,
		backgroundColor: '#fff',
		borderTopLeftRadius: 30,
		borderTopRightRadius: 30,
		paddingHorizontal: 20,
		paddingVertical: 30,
	},
	text_header: {
		color: '#fff',
		fontWeight: 'bold',
		fontSize: 30,
	},
	text_footer: {
		color: '#05375a',
		fontSize: 18,
	},
	action: {
		flexDirection: 'row',
		marginTop: 10,
		borderBottomWidth: 1,
		borderBottomColor: '#f2f2f2',
		paddingBottom: 5,
	},
	actionError: {
		flexDirection: 'row',
		marginTop: 10,
		borderBottomWidth: 1,
		borderBottomColor: '#FF0000',
		paddingBottom: 5,
	},
	textInput: {
		flex: 1,
		// marginTop: Platform.OS === 'ios' ? 0 : -12,
		paddingLeft: 10,
		color: '#05375a',
	},
	errorMsg: {
		color: '#FF0000',
		fontSize: 14,
	},
	button: {
		alignItems: 'center',
		marginTop: 50,
	},
	signIn: {
		width: '100%',
		height: 50,
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 10,
	},
	textSign: {
		fontSize: 18,
		fontWeight: 'bold',
	},
});
