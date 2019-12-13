import React from 'react';
import { Platform } from 'react-native';
import {
	createStackNavigator,
	createBottomTabNavigator,
	createAppContainer,
	createDrawerNavigator,
	DrawerNavigator
} from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';

import LoginScreen from '../screens/LoginScreen';

import HomeStack from './HomeStackNavigator';
import NewPostStack from './NewPostStackNavigator';
import SettingsStack from './SettingsStackNavigator';

import DonationUsageScreen from '../screens/DonationUsageScreen';
import SideStack from '../screens/SideMenuScreen';
import SideMenuScreen from '../screens/SideMenuScreen';
import RegisterScreen from '../screens/RegisterScreen'

const config = Platform.select({
	web     : { headerMode: 'screen' },
	default : {}
});

const DefaultNavigationOptions = {
	headerTintColor : 'white',
	headerStyle     : {
		backgroundColor : 'tomato'
	}
};

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

const MainTab = createBottomTabNavigator(
	{
		Home     : HomeStack,
		NewPost  : NewPostStack,
		Donation : DonationUsageStack,
		Settings : SettingsStack
	},
	{
		tabBarOptions : {
			activeTintColor   : 'tomato',
			inactiveTintColor : 'gray'
		}
	}
);

const RootStack = createStackNavigator(
	{
		Main  : {
			screen : MainTab
		},
		//
		Login : LoginScreen,
		Register : RegisterScreen
		
	},
	{
		mode       : 'modal',
		headerMode : 'none'
	}
);

const TabContainer = createAppContainer(RootStack);

export default TabContainer;
