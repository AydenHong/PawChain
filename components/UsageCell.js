import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default class UsageCell extends Component {
	static defaultProps = {
		purchasing : 'null',
		date       : 'null',
		price      : 0
	};

	render() {
		return (
			<View style={styles.container}>
				<View style={{ flexDirection: 'row' }}>
					<Text style={styles.purchasing}>
						{this.props.purchasing}
					</Text>
					<Text style={styles.date}>{this.props.date}</Text>
				</View>
				<View style={styles.price}>
					<Text style={styles.purchasing}>{this.props.price}</Text>
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container  : {
		flex          : 1,
		width         : '100%',
		flexDirection : 'row',
		padding       : 3,
		alignItems    : 'center'
	},
	purchasing : {
		fontSize : 16
	},
	date       : {
		fontSize : 16
	},
	price      : {
		marginLeft : 'auto',
		fontSize   : 16
	}
});
