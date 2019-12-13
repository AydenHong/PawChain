import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import RoundImage from '../components/RoundImage';
import RoundImageButton from './RoundImageButton';

export default class ListCell extends Component {
	static defaultProps = {
		name  : 'null',
		image : 'null'
	};

	constructor(props) {
		super(props);
		this.state = {};
		console.log('listcell');
		console.log(this.props.image);
	}

	render() {
		return (
			<View style={styles.container}>
				<RoundImage source={this.props.image} />
				<Text style={styles.name}>{this.props.name}</Text>
				<View style={styles.buttons}>
					<RoundImageButton
						iconName={'ios-create'}
						color={'#F75356'}
					/>
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
		marginLeft : 10
	},
	buttons   : {
		marginLeft    : 'auto',
		height        : 50,
		flexDirection : 'row'
	}
});
