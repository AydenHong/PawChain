import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';

export default class RoundImageButton extends Component {
	static defaultProps = {
		name : ''
	};

	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<TouchableOpacity>
				<Ionicons
					name={this.props.iconName}
					color={'#F75356'}
					style={styles.roundimage}
				/>
			</TouchableOpacity>
		);
	}
}

const styles = StyleSheet.create({
	roundimage : {
		width           : 35,
		backgroundColor : '#a1a1',
		height          : 35,
		marginLeft      : 10,
		marginRight     : 10,
		borderRadius    : 25,
		alignItems      : 'center',
		paddingLeft     : 12,
		paddingTop      : 7,
		fontSize        : 18
	}
});
