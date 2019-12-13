import React, { Component } from 'react';
import { AppRegistry, Dimensions, ScrollView } from 'react-native';
import {
	createDrawerNavigator,
	DrawerNavigator,
	createAppContainer
} from 'react-navigation';

import MainTab from '../navigation/MainTab';
import HomeStack from '../navigation/HomeStackNavigator';
import NewPostStack from '../navigation/NewPostStackNavigator';
import SettingStack from '../navigation/SettingsStackNavigator';
import DonationUsageScreen from '../screens/DonationUsageScreen';

import Home from '../screens/Home'; //
import InterestScreen from '../screens/InterestScreen';
import DonationScreen from '../screens/DonationScreen';
import SideMenuScreen from '../screens/SideMenuScreen'; //
import EditProfileScreen from '../screens/EditProfileScreen';

const DrawerNav = createDrawerNavigator({
	//Drawer Optons and indexing
	Home                : {
		//Title
		screen            : MainTab,
		navigationOptions : {
			drawerLabel : 'Home'
		}
	},
	NewPostStack        : {
		screen            : NewPostStack,
		navigationOptions : {
			drawerLabel : '새 게시글'
		}
	},
	DonationUsageScreen : {
		screen            : DonationUsageScreen,
		navigationOptions : {
			drawerLabel : '기부금 사용 내역'
		}
	},
	InterestScreen      : {
		//Title
		screen            : InterestScreen,
		navigationOptions : {
			drawerLabel : '관심 동물'
		}
	},
	DonationScreen      : {
		screen            : DonationScreen,
		navigationOptions : {
			drawerLabel : '나의 기부 내역'
		}
	},
	EditProfileScreen   : {
		screen            : EditProfileScreen,
		navigationOptions : {
			drawerLabel : '프로필 수정'
		}
	},
	SettingStack        : {
		//Title
		screen            : SettingStack,
		navigationOptions : {
			drawerLabel : '설정'
		}
	}
});

export default createAppContainer(DrawerNav);
