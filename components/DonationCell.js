import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import RoundImage from './RoundImage';

export default class DonationCell extends Component {
	static defaultProps = {
		name        : 'null',
		shelterName : 'null',
		date        : '',
		price       : 0,
		image       : 'null'
	};

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<View style={styles.container}>
				<RoundImage source={this.props.image} />
				<View>
					<View style={{ flexDirection: 'row' }}>
						<Text style={styles.name}>{this.props.name}</Text>
						<Text style={styles.shelter}>
							({this.props.shelterName})
						</Text>
					</View>
					<Text style={styles.date}>{this.props.date}</Text>
				</View>
				<View style={styles.price}>
					<Text style={styles.name}>{this.props.price}원</Text>
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container : {
		flex          : 1,
		width         : '100%',
		flexDirection : 'row',
		padding       : 10,
		alignItems    : 'center'
	},
	name      : {
		fontSize   : 15,
		marginLeft : 10,
		fontWeight : 'bold'
	},
	shelter   : {
		fontSize   : 15,
		fontWeight : 'bold'
	},
	date      : {
		fontSize   : 10,
		marginLeft : 17
	},
	price     : {
		marginLeft : 'auto',
		height     : 50
	}
});
