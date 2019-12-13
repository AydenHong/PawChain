import React, { Component } from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import DonationCell from '../components/DonationCell';

const mockData = [
	{
		name        : '튼튼이',
		shelterName : '행복 보호소',
		date        : '2019.10.09',
		price       : 10000,
		image       : 'https://pbs.twimg.com/media/CfV6pVnUAAA-x-o.jpg'
	},
	{
		name        : '멍멍이',
		shelterName : '스탠드 보호소',
		date        : '2019.10.06',
		price       : 5000,
		image       :
			'https://mblogthumb-phinf.pstatic.net/MjAxODAyMjhfMTc3/MDAxNTE5NzkxOTU4MjI1.A4yQeHFyEX58mDDm4MQHg78tO-o7tgK-zujTG1-iIYgg.Y6zsd7MGKxED3g9VPCPRNaouXHOC67D4sbvq8Rr-sEEg.JPEG.seokm1016/image_3006258451519791446676.jpg?type=w800'
	},
	{
		name        : '똘이',
		shelterName : '사랑 유기견 보호센터',
		date        : '2019.10.01',
		price       : 12000,
		image       :
			'http://www.9dog.co.kr/wp-content/uploads/2013/07/ep16.jpg'
	},
	{
		name        : '행복이',
		shelterName : '호박 보호소',
		date        : '2018.10.10',
		price       : 15000,
		image       :
			'https://image-notepet.akamaized.net/resize/620x-/seimage/20190802%2F0031e1e9d657a2603b9e19991b64fc0b.jpg'
	},
	{
		name        : '대왕이',
		shelterName : '희망 보호소',
		date        : '2019.09.28',
		price       : 10000,
		image       :
			'http://www.jindodogshop.co.kr/data/file/freeboard/13c5f12b_DSC02743.JPG'
	},
	{
		name        : '유자',
		shelterName : '나비 유기동물 보호소',
		date        : '2019.09.25',
		price       : 10000,
		image       :
			'https://post-phinf.pstatic.net/MjAxNzA2MjlfMjk4/MDAxNDk4Njk4OTYzMTIz.RC7_Z7bSDD0noFihxaBGb5axQwFltnhYJnfXhCOlDu4g.ksRlpD9YhJQAwRFH0iw5qQvuZYkuAFDO5uoDZrHsfhcg.PNG/20170517_130400.png?type=w1200'
	},
	{
		name        : '밍밍이',
		shelterName : '럭키세븐 보호소',
		date        : '2019.09.22',
		price       : 5000,
		image       : 'https://img.theqoo.net/img/QMLpw.jpg'
	},
	{
		name        : '초코',
		shelterName : '예솔 동물병원',
		date        : '2019.09.10',
		price       : 7000,
		image       :
			'http://images.christiantoday.co.kr/data/images/full/298055/image.png?w=654'
	},
	{
		name        : '댕댕이',
		shelterName : '하하호호 보호소',
		date        : '2019.09.06',
		price       : 10000,
		image       :
			'http://cdnweb01.wikitree.co.kr/webdata/editor/201607/08/img_20160708155119_135426f6.jpg'
	},
	{
		name        : '뿌꾸',
		shelterName : '행복 보호소',
		date        : '2019.09.01',
		price       : 16000,
		image       :
			'http://static.hubzum.zumst.com/hubzum/2019/02/28/15/153de10bbce64f83a9a262cebc250a2f.jpg'
	},
	{
		name        : '마린',
		shelterName : '서초구 보호소',
		date        : '2019.08.25',
		price       : 20000,
		image       :
			'https://img.huffingtonpost.com/asset/5c21caa51d0000250231b2a6.jpeg?ops=scalefit_630_noupscale'
	},
	{
		name        : '울라숑',
		shelterName : '월튼 보호소',
		date        : '2019.08.22',
		price       : 14000,
		image       :
			'https://img.insight.co.kr/static/2019/01/07/700/rxs37v2h1rr627wmo256.jpg'
	},
	{
		name        : '철수',
		shelterName : '늘푸른 보호소',
		date        : '2019.08.11',
		price       : 16000,
		image       :
			'http://thumb.mtstarnews.com/06/2019/07/2019071109480354988_2.jpg'
	},
	{
		name        : '인절미',
		shelterName : '노엘 유기동물 보호소',
		date        : '2019.08.10',
		price       : 6000,
		image       :
			'https://img1.daumcdn.net/thumb/R800x0/?scode=mtistory2&fname=https%3A%2F%2Ft1.daumcdn.net%2Fcfile%2Ftistory%2F99E9E0345BC1F0FB3E'
	},
	{
		name        : '뿡뿡이',
		shelterName : '미라클 보호소',
		date        : '2019.08.08',
		price       : 9000,
		image       :
			'http://digitalchosun.dizzo.com/site/data/img_dir/2015/03/23/2015032313005_0.jpg'
	},
	{
		name        : '감자',
		shelterName : '서울 동물병원',
		date        : '2019.08.01',
		price       : 10000,
		image       :
			'https://i.pinimg.com/originals/78/f8/87/78f887e78950fd7d3a7f0f2982d2dd67.jpg'
	},
	{
		name        : '몽실이',
		shelterName : '은수 유기견 보호소',
		date        : '2019.07.27',
		price       : 10000,
		image       :
			'https://image-notepet.akamaized.net/resize/620x-/seimage/20190325%2Fb6c456f4f6bf5d2560c26a780b7c36b9.jpg'
	}
];

export default class DonationScreen extends Component {
	constructor(props) {
		super(props);
		this.state = {
			refreshing : false,
			comments   : [ mockData ]
		};
	}
	static navigationOptions = ({ navigation }) => {
		// const params = navigation.state.params || {};
		//제목추가
		return {
			headerRight      : <View style={{ padding: 5, paddingLeft: 15 }} />,
			title            : '나의 기부 내역',
			headerTitleStyle : {
				textAlign : 'center',
				flex      : 1,
				fontSize  : 22
			}
		};
	};

	renderItem = ({ item }) => {
		return <DonationCell {...item} />;
	};

	render() {
		return (
			<View style={styles.box}>
				<ScrollView style={styles.commentScroll}>
					<FlatList
						style={styles.commentlist}
						data={mockData}
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
	box           : {
		flex        : 1,
		marginLeft  : 15,
		marginRight : 15
	},
	commentlist   : {
		paddingBottom : 5
	},
	commentScroll : {}
});
