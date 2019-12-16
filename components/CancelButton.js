import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity
} from 'react-native';
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';

export default class CancelButton extends Component {

  static defaultProps = {
    title: 'Button',
    onPress: () => {},
    color: 'white'
};

  constructor(props) {
      super(props);
      this.state = {};
  }

  render() {
    return (
      <View style={styles.header}>
        <TouchableOpacity onPress={this.props.onPress}>
        <Text style={{fontSize: 15, color: 'gray'}}>Cancel</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header:{
    padding:5,
    paddingRight: 18
  },
});