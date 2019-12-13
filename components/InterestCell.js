import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import RoundImage from './RoundImage';
import RoundImageButton from './RoundImageButton';

export default class InterestCell extends Component {
	static defaultProps = {
		name  : 'null',
		image : 'null'
	};

	constructor(props) {
		super(props);
		console.log('props------------------');
		console.log(props);
	}

	render() {
		return (
			<View style={styles.container}>
				<RoundImage source={this.props.image} />
				<View>
					<Text style={styles.name}>{this.props.name}</Text>
				</View>
				<View style={styles.buttons}>
					<RoundImageButton
						iconName={'ios-trash'}
						color={'#F75356'}
					/>
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container : {
		width         : '100%',
		flexDirection : 'row',
		padding       : 10,
		alignItems    : 'center'
	},
	name      : {
		fontWeight : 'bold',
		marginLeft : 10,
		fontSize   : 20
	},
	buttons   : {
		marginLeft    : 'auto',
		height        : 50,
		flexDirection : 'row'
	}
});
