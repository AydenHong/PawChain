import React, { Component } from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';

export default class RoundImage extends Component {
	static defaultProps = {
		source : 'null',
		size   : 50,
		radius : 25
	};

	constructor(props) {
		super(props);
		this.state = {};
		console.log('-------RoundImageSource---------');
		console.log(this.props.source);
	}

	render() {
		return (
			<Image
				style={[
					{
						width: this.props.size,
						height: this.props.size,
						borderRadius: this.props.radius
					},
					styles.roundimage
				]}
				source={{ uri: this.props.source }
				// { uri: this.props.image }
				// uri :
				// 	'https://www.tesla.com/sites/default/files/images/model-3/model_3--side_profile.png?20170801'
				}
			/>
		);
	}
}

const styles = StyleSheet.create({
	roundimage : {
		borderColor : 'gray',
		resizeMode  : 'stretch',
		borderWidth : 0.1,
		marginLeft  : 10,
		marginRight : 10
	}
});
