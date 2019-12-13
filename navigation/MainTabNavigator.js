import React from 'react';
import { Platform } from 'react-native';
import {
	createStackNavigator,
	createBottomTabNavigator
} from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
// import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';
import SettingsScreen from '../screens/SettingsScreen';
import Home from '../screens/Home';
import Settings from '../screens/Settings';
import DetailScreen from '../screens/DetailScreen';
import DonationUsageScreen from '../screens/DonationUsageScreen';
import PostingScreen from '../screens/PostingScreen';
import ShelterProfileScreen from '../screens/ShelterProfileScreen';

const config = Platform.select({
	web     : { headerMode: 'screen' },
	default : {}
});

const HomeStack = createStackNavigator(
	{
		Home    : Home,
		Detail  : DetailScreen,
		Profile : ShelterProfileScreen
	},
	config
);

HomeStack.navigationOptions = {
	tabBarLabel : 'Home',
	tabBarIcon  : ({ focused }) => (
		<TabBarIcon
			focused={focused}
			name={
				Platform.OS === 'ios' ? (
					`ios-information-circle${focused ? '' : '-outline'}`
				) : (
					'md-information-circle'
				)
			}
		/>
	)
};

HomeStack.path = '';

// const LinksStack = createStackNavigator(
// 	{
// 		Links : LinksScreen
// 	},
// 	config
// );

// LinksStack.navigationOptions = {
// 	tabBarLabel : 'Links',
// 	tabBarIcon  : ({ focused }) => (
// 		<TabBarIcon
// 			focused={focused}
// 			name={Platform.OS === 'ios' ? 'ios-link' : 'md-link'}
// 		/>
// 	)
// };

// LinksStack.path = '';

const DonationUsageStack = createStackNavigator(
	{
		DonationUsage : DonationUsageScreen
	},
	config
);

DonationUsageStack.navigationOptions = {
	tabBarLabel : 'Donations',
	tabBarIcon  : ({ focused }) => (
		<TabBarIcon
			focused={focused}
			name={Platform.OS === 'ios' ? 'ios-cash' : 'ios-cash'}
		/>
	)
};

const SettingsStack = createStackNavigator(
	{
		// Settings : SettingsScreen
		Settings : Settings
	},
	config
);

SettingsStack.navigationOptions = {
	tabBarLabel : 'Settings',
	tabBarIcon  : ({ focused }) => (
		<TabBarIcon
			focused={focused}
			name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'}
		/>
	)
};

SettingsStack.path = '';

const tabNavigator = createBottomTabNavigator({
	HomeStack,
	LinksStack,
	DonationUsageStack,
	SettingsStack
});

tabNavigator.path = '';

export default tabNavigator;
