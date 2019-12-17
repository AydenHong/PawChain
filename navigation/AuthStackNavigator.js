import React from 'react';
import { StyleSheet, Text, View, Platform } from 'react-native';

import { createStackNavigator } from 'react-navigation-stack';
import TabBarIcon from '../components/TabBarIcon';

import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';

/* 1. CONFIG */
const config = Platform.select({
	web     : { headerMode: 'screen' },
	default : {}
});

const defaultNavigationOptions = {
	headerTintColor : 'white',
	headerStyle     : {
		backgroundColor : 'white'
	}
};

/* 2. Navigator */
const AuthStack = createStackNavigator(
	{
		Login           : LoginScreen,
		Register         : RegisterScreen,
	},
	config
);

// AuthStack.navigationOptions = {
// 	tabBarLabel : '',
// 	tabBarIcon  : ({ focused }) => (
// 		<TabBarIcon
// 			focused={focused}
// 			name={Platform.OS === 'ios' ? 'ios-home' : 'ios-home'}
// 		/>
// 	)
// };

AuthStack.path = '';

export default AuthStack;
