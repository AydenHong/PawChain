import React from 'react';
import { StyleSheet, Text, View, Platform } from 'react-native';

import { createStackNavigator } from 'react-navigation-stack';
import TabBarIcon from '../components/TabBarIcon';
// import { AntDesign } from '@expo/vector-icons';

import Settings from '../screens/Settings';
import DonationScreen from '../screens/DonationScreen';
import InterestScreen from '../screens/InterestScreen';
import EditProfileScreen from '../screens/EditProfileScreen';

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
const SettingsStack = createStackNavigator(
	{
		Settings    : Settings,
		Donations   : DonationScreen,
		Interests   : InterestScreen,
		EditProfile : EditProfileScreen
	},
	config
);

SettingsStack.navigationOptions = {
	tabBarLabel : '',
	tabBarIcon  : ({ focused }) => (
		<TabBarIcon
			focused={focused}
			name={Platform.OS === 'ios' ? 'ios-settings' : 'ios-settings'}
		/>
	)
};

SettingsStack.path = '';

export default SettingsStack;
