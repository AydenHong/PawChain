import React from 'react';
import { StyleSheet, Text, View, Platform } from 'react-native';

import { createStackNavigator } from 'react-navigation-stack';
import TabBarIcon from '../components/TabBarIcon';
// import { AntDesign } from '@expo/vector-icons';

import PostingScreen from '../screens/PostingScreen';

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
const NewPostStack = createStackNavigator(
	{
		Posting : PostingScreen
	},
	config
);

NewPostStack.navigationOptions = {
	tabBarLabel : '',
	tabBarIcon  : ({ focused }) => (
		<TabBarIcon
			focused={focused}
			name={
				Platform.OS === 'ios' ? (
					'ios-add-circle'
				) : (
					'ios-add-circle-outline'
				)
			}
		/>
	)
};

NewPostStack.path = '';

export default NewPostStack;
