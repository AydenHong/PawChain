import React from 'react';
import { StyleSheet, Text, View, Platform } from 'react-native';

import { createStackNavigator } from 'react-navigation-stack';
import TabBarIcon from '../components/TabBarIcon';

import Home from '../screens/Home';
import DetailScreen from '../screens/DetailScreen';
import ShelterProfileScreen from '../screens/ShelterProfileScreen';

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
const HomeStack = createStackNavigator(
	{
		Home           : Home,
		Detail         : DetailScreen,
		ShelterProfile : ShelterProfileScreen
	},
	config
);

HomeStack.navigationOptions = {
	tabBarLabel : '',
	tabBarIcon  : ({ focused }) => (
		<TabBarIcon
			focused={focused}
			name={Platform.OS === 'ios' ? 'ios-home' : 'ios-home'}
		/>
	)
};

HomeStack.path = '';

export default HomeStack;
