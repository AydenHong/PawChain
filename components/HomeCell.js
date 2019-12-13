import React, { Component } from 'react';
import {
	Text,
	View,
	TouchableOpacity,
	StyleSheet,
	Image,
	AsyncStorage
} from 'react-native';

import { withNavigation } from 'react-navigation';

import {
	Ionicons,
	MaterialCommunityIcons,
	FontAwesome
} from '@expo/vector-icons';

import RoundImage from '../components/RoundImage';

class HomeCell extends Component {
	static defaultProps = {
		shelterName  : '보호소 이름',
		shelterImage : '',
		email        : 'sampleEmail',
		donation     : '',
		name         : '강아지 이름',
		age          : '강아지 나이',
		abandonDate  : '2019.00.00',
		likes        : '000',
		interests    : '001',
		comments     : '002',
		backing      : '003',
		image        :
			'https://image.shutterstock.com/z/stock-photo-internet-browser-error-message-no-image-available-handwritten-with-white-chalk-on-blackboard-with-39202789.jpg'
	};

	constructor(props) {
		super(props);
		const dogdata = this.props.navigation.getParam('Home');
		this.state = {
			shelterName  : '보호소 이름',
			shelterImage : '',
			email        : '',
			donation     : '',
			name         : '강아지 이름',
			age          : '강아지 나이',
			abandonDate  : '2019.00.00',
			likes        : '000',
			interests    : '001',
			comments     : '002',
			backing      : '003'
		};
		console.log('----------Props----------');
		console.log(props);
	}

	render() {
		return (
			<View style={styles.container}>
				<View style={styles.shelterItemStyle}>
					<TouchableOpacity
						style={{
							flexDirection : 'row',
							flexGrow      : 1
						}}
						onPress={(navigation) => {
							this.props.navigation.navigate('ShelterProfile', {
								shelterImage : this.props.shelterImage,
								shelterName  : this.props.shelterName,
								donation     : this.props.donation,
								email        : this.props.email
							});
						}}
					>
						<RoundImage source={this.props.shelterImage} />
						<View style={{ flexDirection: 'column' }}>
							<Text style={styles.title}>
								{' '}
								{this.props.shelterName}{' '}
							</Text>
							<Text> {Date.now()} </Text>
						</View>
					</TouchableOpacity>
					<TouchableOpacity style={{ padding: 5 }}>
						<FontAwesome
							name={'share'}
							size={25}
							color={'tomato'}
						/>
					</TouchableOpacity>
				</View>

				<TouchableOpacity
					style={styles.imageItem}
					onPress={() => {
						this.props.navigation.navigate('Detail', {
							image       : this.props.image,
							name        : this.props.name,
							shelterName : this.props.shelterName,
							likes       : this.props.likes,
							interests   : this.props.interests,
							comments    : this.props.comments,
							backing     : this.props.backing,
							abandonDate : this.props.abandonDate
						});
					}}
				>
					<Image
						style={styles.image}
						source={{
							// 'https://www.tesla.com/tesla_theme/assets/img/compare/model_s--side_profile.png?20170524'
							uri : this.props.image
						}}
					/>
				</TouchableOpacity>
				<View style={styles.itemBar}>
					<TouchableOpacity style={styles.iconsTexts}>
						<Ionicons
							name={'ios-heart-empty'}
							size={25}
							color={'tomato'}
							style={{ paddingLeft: 10 }}
						/>
						<Text style={styles.itemText}>
							{this.props.likes} 좋아요
						</Text>
					</TouchableOpacity>
					<TouchableOpacity style={styles.iconsTexts}>
						<Ionicons name={'ios-paw'} size={25} color={'tomato'} />
						<Text style={styles.itemText}>
							{this.props.interests} 관심
						</Text>
					</TouchableOpacity>
					<TouchableOpacity style={styles.iconsTexts}>
						<MaterialCommunityIcons
							name={'comment-outline'}
							size={25}
							color={'tomato'}
						/>
						<Text style={styles.itemText}>
							{this.props.comments} 댓글
						</Text>
					</TouchableOpacity>
					<TouchableOpacity style={styles.iconsTexts}>
						<MaterialCommunityIcons
							name={'bone'}
							size={25}
							color={'tomato'}
						/>
						<Text style={(styles.itemText, { paddingRight: 10 })}>
							{this.props.backing} 후원
						</Text>
					</TouchableOpacity>
				</View>

				<View style={styles.detail}>
					<View
						style={{
							flexDirection  : 'column',
							alignItems     : 'stretch',
							alignContent   : 'flex-start',
							justifyContent : 'space-evenly'
						}}
					>
						<Text> 이름 : {this.props.name} </Text>
						<Text> 나이 : {this.props.age} </Text>
					</View>
					<View
						style={{
							flexDirection  : 'column',
							alignItems     : 'stretch',
							alignContent   : 'flex-end',
							justifyContent : 'space-evenly'
						}}
					>
						<Text> 보호소 : {this.props.shelterName} </Text>
						<Text> 유기 날짜 : {this.props.abandonDate} </Text>
					</View>
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container        : {
		width         : '100%',
		// flexGrow      : 1,
		height        : 500,
		flexDirection : 'column',
		alignItems    : 'center'
	},
	shelterItemStyle : {
		width         : '100%',
		// flexGrow      : 1,
		// flexBasis     : 0,
		height        : 70,
		flexDirection : 'row',
		padding       : 10
	},
	imageItem        : {
		height        : 300,
		width         : '100%',
		flexDirection : 'row',
		alignItems    : 'center',
		marginLeft    : 10,
		marginRight   : 10
	},
	image            : {
		height      : 300,
		width       : '100%',
		resizeMode  : 'stretch',

		borderColor : 'gray'
	},
	title            : {
		fontSize   : 20,
		fontWeight : 'bold'
	},
	itemBar          : {
		height         : 45,
		width          : '100%',
		flexDirection  : 'row',
		alignItems     : 'stretch',
		justifyContent : 'space-around'
	},
	iconsTexts       : {
		flexDirection     : 'row',
		textAlign         : 'center',
		textAlignVertical : 'center'
	},
	itemText         : {
		fontSize          : 13,
		textAlign         : 'center',
		textAlignVertical : 'center'
	},
	detail           : {
		height         : 80,
		width          : '100%',
		flexDirection  : 'row',
		alignItems     : 'stretch',
		alignContent   : 'space-around',
		justifyContent : 'space-evenly'
	}
});

export default withNavigation(HomeCell);
