import React from 'react';
import {
	Ionicons,
	AntDesign,
	MaterialIcons,
	MaterialCommunityIcons
} from '@expo/vector-icons';

import Colors from '../constants/Colors';

export default function CustomTabBarIcon(props) {
	return (
		<props.customIconGroup
			name={props.name}
			size={26}
			style={{ marginBottom: -3 }}
			color={
				props.focused ? Colors.tabIconSelected : Colors.tabIconDefault
			}
		/>
	);
}
