import React, { Component } from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';
import InterestCell from '../components/InterestCell';
import { FlatList } from 'react-native-gesture-handler';

const mockData = [
	{
		name  : '튼튼이',
		image : 'https://pbs.twimg.com/media/CfV6pVnUAAA-x-o.jpg'
	},
	{
		name  : '멍멍이',
		image :
			'https://mblogthumb-phinf.pstatic.net/MjAxODAyMjhfMTc3/MDAxNTE5NzkxOTU4MjI1.A4yQeHFyEX58mDDm4MQHg78tO-o7tgK-zujTG1-iIYgg.Y6zsd7MGKxED3g9VPCPRNaouXHOC67D4sbvq8Rr-sEEg.JPEG.seokm1016/image_3006258451519791446676.jpg?type=w800'
	},
	{
		name  : '똘이',
		image : 'http://www.9dog.co.kr/wp-content/uploads/2013/07/ep16.jpg'
	},
	{
		name  : '행복이',
		image :
			'https://image-notepet.akamaized.net/resize/620x-/seimage/20190802%2F0031e1e9d657a2603b9e19991b64fc0b.jpg'
	},
	{
		name  : '대왕이',
		image :
			'http://www.jindodogshop.co.kr/data/file/freeboard/13c5f12b_DSC02743.JPG'
	},
	{
		name  : '유자',
		image :
			'https://post-phinf.pstatic.net/MjAxNzA2MjlfMjk4/MDAxNDk4Njk4OTYzMTIz.RC7_Z7bSDD0noFihxaBGb5axQwFltnhYJnfXhCOlDu4g.ksRlpD9YhJQAwRFH0iw5qQvuZYkuAFDO5uoDZrHsfhcg.PNG/20170517_130400.png?type=w1200'
	},
	{
		name  : '밍밍이',
		image : 'https://img.theqoo.net/img/QMLpw.jpg'
	},
	{
		name  : '초코',
		image :
			'http://images.christiantoday.co.kr/data/images/full/298055/image.png?w=654'
	},
	{
		name  : '댕댕이',
		image :
			'http://cdnweb01.wikitree.co.kr/webdata/editor/201607/08/img_20160708155119_135426f6.jpg'
	}
];

export default class InterestScreen extends Component {
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
			title            : '관심동물',
			headerTitleStyle : {
				textAlign : 'center',
				flex      : 1,
				fontSize  : 22
			}
		};
	};

	renderItem = ({ item }) => {
		return <InterestCell {...item} />;
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
		flex       : 1,
		marginLeft : 15
	},
	commentlist   : {
		paddingBottom : 5
	},
	commentScroll : {}
});
