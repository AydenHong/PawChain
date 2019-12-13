import React, { Component } from 'react';
import {
	Text,
	View,
	Image,
	StyleSheet,
	ScrollView,
	FlatList
} from 'react-native';
import UsageCell from '../components/UsageCell';

const mockDataSep = [
	{
		purchasing : '예솔 동물병원',
		date       : '(2019년 9월 27일)',
		price      : '120,000원'
	},
	{
		purchasing : '재우네 펫샾',
		date       : '(2019년 9월 24일)',
		price      : '70,000원'
	},
	{
		purchasing : '은수네 사료가게',
		date       : '(2019년 9월 20일)',
		price      : '150,000원'
	},
	{
		purchasing : '경표 펫 SPA',
		date       : '(2019년 9월 12일)',
		price      : '100,000원'
	},
	{
		purchasing : '직원 상여금',
		date       : '(2019년 9월 10일)',
		price      : '150,000원'
	},
	{
		purchasing : '19번 케이지 수리',
		date       : '(2019년 9월 4일)',
		price      : '50,000원'
	}
];

const mockDataAug = [
	{
		purchasing : '동물 세미나 참가비',
		date       : '(2019년 8월 27일)',
		price      : '80,000원'
	},
	{
		purchasing : '월튼 철물점',
		date       : '(2019년 8월 26일)',
		price      : '96,000원'
	},
	{
		purchasing : 'YeSOl PetShop',
		date       : '(2019년 8월 16일)',
		price      : '140,000원'
	},
	{
		purchasing : '은하수 봉사센터',
		date       : '(2019년 8월 11일)',
		price      : '135,000원'
	},
	{
		purchasing : '세미나 개최비용',
		date       : '(2019년 8월 10일)',
		price      : '100,000원'
	},
	{
		purchasing : '변씨네 출장 수리점',
		date       : '(2019년 8월 2일)',
		price      : '32,000원'
	}
];

const mockDataJul = [
	{
		purchasing : "'애견백서' 도서 구입",
		date       : '(2019년 7월 31일)',
		price      : '17,000원'
	},
	{
		purchasing : '에어컨 수리',
		date       : '(2019년 7월 24일)',
		price      : '62,000원'
	},
	{
		purchasing : '탱이 장례비용',
		date       : '(2019년 7월 14일)',
		price      : '60,000원'
	},
	{
		purchasing : '직원 회식비용',
		date       : '(2019년 7월 12일)',
		price      : '88,000원'
	},
	{
		purchasing : '길고양이 중성화 수술',
		date       : '(2019년 7월 9일)',
		price      : '176,000원'
	}
];

export default class DonationUsageScreen extends Component {
	constructor(props) {
		super(props);
		this.state = {
			refreshing : false,
			comments   : [ mockDataSep, mockDataAug, mockDataJul ]
		};
	}

	static navigationOptions = ({ navigation }) => {
		const params = navigation.state.params || {};

		return {
			headerLeft       : <View style={{ padding: 5, paddingLeft: 15 }} />,
			headerRight      : <View style={{ padding: 5, paddingLeft: 15 }} />,
			title            : '기부금 사용 내역',
			headerTitleStyle : {
				textAlign : 'center',
				flex      : 1,
				fontSize  : 22
			}
		};
	};

	renderItem = ({ item }) => {
		return <UsageCell {...item} />;
	};

	render() {
		return (
			<View style={{ flex: 1 }}>
				<View
					style={{
						borderBottomColor : 'lightgray',
						borderBottomWidth : 1
					}}
				>
					<Image
						style={styles.profile}
						source={{
							uri :
								'https://images.mypetlife.co.kr/wp-content/uploads/2018/06/06200333/pexels-photo-1108099-1024x768.jpeg'
						}}
					/>
					<Text style={{ textAlign: 'center', fontSize: 25 }}>
						경표 보호소
					</Text>
					<Text
						style={{
							textAlign    : 'center',
							fontSize     : 17,
							color        : 'darkgray',
							marginBottom : 18
						}}
					>
						happyshelter@happy.com
					</Text>
				</View>
				<View style={styles.container}>
					<View style={styles.range}>
						<Text style={styles.contents}>총 기부 받은 금액</Text>
					</View>
					<View style={styles.right}>
						<Text style={styles.contents}>1,689,200원</Text>
					</View>
				</View>
				<View style={styles.container}>
					<Text style={styles.contents}>수용하는 동물 수</Text>
					<View style={styles.right}>
						<Text style={styles.contents}>43 / 50마리</Text>
					</View>
				</View>
				<View
					style={{
						borderBottomColor : 'lightgray',
						borderBottomWidth : 1,
						marginTop         : 18
					}}
				/>
				<ScrollView>
					<Text style={styles.date}>2019년 9월</Text>
					<FlatList
						data={mockDataSep}
						renderItem={this.renderItem}
						onRefresh={this.refreshData}
						refreshing={this.state.refreshing}
						keyExtractor={(item, index) => index.toString()}
					/>
					<Text style={styles.date}>2019년 8월</Text>
					<FlatList
						data={mockDataAug}
						renderItem={this.renderItem}
						onRefresh={this.refreshData}
						refreshing={this.state.refreshing}
						keyExtractor={(item, index) => index.toString()}
					/>
					<Text style={styles.date}>2019년 7월</Text>
					<FlatList
						style={styles.container2}
						data={mockDataJul}
						renderItem={this.renderItem}
						onRefresh={this.refreshData}
						refreshing={this.state.refreshing}
						keyExtractor={(item, index) => index.toString()}
					/>
				</ScrollView>
			</View>
		);
	}
}
const styles = StyleSheet.create({
	container  : {
		width          : '100%',
		// height: '100%',
		flexDirection  : 'row',
		alignItems     : 'center',
		justifyContent : 'space-between',
		padding        : 5,
		marginTop      : 15
	},
	profile    : {
		width        : 120,
		height       : 120,
		borderRadius : 60,
		marginTop    : 35,
		marginBottom : 15,
		margin       : 6,
		alignSelf    : 'center'
	},
	contents   : {
		paddingLeft : 15,
		color       : 'tomato',
		fontSize    : 23
	},
	right      : {
		paddingRight : 15,
		marginLeft   : 'auto'
	},
	date       : {
		textAlign    : 'center',
		fontSize     : 17,
		color        : 'lightgrey',
		marginTop    : 12,
		marginBottom : 5
	},
	scrollView : {}
});
