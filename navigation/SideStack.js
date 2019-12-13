import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View, TouchableOpacity
} from 'react-native';

import { StackNavigator } from  'react-navigation';
import IOSIcon from "react-native-vector-icons/Ionicons";
import Home from '../screens/Home';
// import DetailScreen from "./DetailScreen";

const SideStack = StackNavigator({
  Main : {
    screen: Home,
    navigationOptions: ({navigation}) => ({
      title: "Home",
      headerLeft:(<TouchableOpacity onPress={() => navigation.navigate("DrawerOpen")}>
                    <IOSIcon name="ios-menu" size={30} />
                  </TouchableOpacity>
      ),
      headerStyle: { paddingRight: 10, paddingLeft: 15 }
    })
  }
//   Detail: {
//     screen: DetailScreen,
//     navigationOptions: ({navigation}) => ({
//       title: "Detail",
//     })     
//   }
});

export default SideStack;