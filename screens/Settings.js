import React, { Component } from 'react';
import {
	Text,
	View,
	SectionList,
	StyleSheet,
	TouchableOpacity
} from 'react-native';
import { switchCase } from '@babel/types';
// import {
// 	TableViewProps,
// 	TableViewCellStyle,
// 	TableViewStyle,
// 	TableView,
// 	section
// } from 'react-native-tableview';

export default class Settings extends Component {
	constructor(props) {
		super(props);
		this.onPress = this.onPress.bind(this);
	}

	static navigationOptions = ({ navigation }) => {
		const params = navigation.state.params || {};

		return {
			title : '설정'
		};
	};

	onPress(item) {
		console.log(item);
		switch (item) {
			case '프로필 수정':
				this.props.navigation.push('EditProfile');
				break;
			case '관심 동물':
				this.props.navigation.push('Interests');
				break;
			case '나의 기부내역':
				this.props.navigation.push('Donations');
				break;
			///////
			case 'Logout':
				this.props.navigation.navigate('Login');
			default:
				console.log('디폴트');
				console.log(item);
		}
	}

	render() {
		return (
			<View style={styles.container}>
				<SectionList
					sections={[
						{
							title : '계정',
							data  : [ '프로필 수정', '관심 동물', '나의 기부내역' ]
						},
						{
							title : '기타',
							data  : [
								'Privacy Policy',
								'Contact Us',
								'About App',
								'Logout'
							]
						}
					]}
					renderItem={({ item, index }) => (
						<TouchableOpacity>
							<Text
								style={styles.item}
								onPress={() => this.onPress(item)}
							>
								{' '}
								{item}{' '}
							</Text>
						</TouchableOpacity>
					)}
					renderSectionHeader={({ section }) => (
						<Text style={styles.sectionHeader}>
							{' '}
							{section.title}{' '}
						</Text>
					)}
					keyExtractor={(item, index) => index}
				/>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container     : {
		flex  : 1,
		width : '100%'
	},
	item          : {
		padding  : 10,
		fontSize : 18,
		height   : 44
	},
	sectionHeader : {
		paddingTop      : 2,
		paddingLeft     : 10,
		paddingRight    : 10,
		paddingBottom   : 2,
		fontSize        : 25,
		fontWeight      : 'bold',
		backgroundColor : 'rgba(247,247,247,1.0)'
	}
});
