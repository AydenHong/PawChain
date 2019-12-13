import React, { Component } from 'react';
import {
	Text,
	View,
	Image,
	TouchableOpacity,
	KeyboardAvoidingView,
	StyleSheet,
	Alert
} from 'react-native';
import IconTextInput from '../components/IconTextInput';
import SubmitButton from '../components/SubmitButton';

export default class EditProfileScreen extends Component {
	render() {
		return (
			<KeyboardAvoidingView
				style={{
					flex           : 1,
					flexDirection  : 'column',
					justifyContent : 'center'
				}}
				behavior="padding"
			>
				<Image
					style={styles.profile}
					source={{
						uri :
							'https://images.mypetlife.co.kr/wp-content/uploads/2018/06/06200333/pexels-photo-1108099-1024x768.jpeg'
					}}
				/>

				<View style={styles.inputs}>
					<Text> 이름 </Text>
					<IconTextInput
						style={{ marginTop: 10 }}
						iconName={'ios-person'}
						placeholder={'이름'}
					/>
					<Text> 이메일 </Text>
					<IconTextInput
						style={{ marginTop: 10 }}
						iconName={'ios-mail'}
						placeholder={'이메일 주소'}
					/>
					<Text> 연락처 </Text>
					<IconTextInput
						style={{ marginTop: 10 }}
						iconName={'ios-call'}
						placeholder={'연락처'}
					/>
					<SubmitButton
						style={{ marginTop: 10 }}
						title={'수정하기'}
						onPress={() => {
							console.log('수정하기 pressed');
							alert('수정되었습니다.');
						}}
					/>
				</View>
			</KeyboardAvoidingView>
		);
	}
}

const styles = StyleSheet.create({
	profile : {
		width        : 120,
		height       : 120,
		borderRadius : 60,
		marginTop    : 35,
		marginBottom : 15,
		margin       : 6,
		alignSelf    : 'center'
	},
	inputs  : {
		width      : '100%',
		height     : '80%',
		padding    : 20,
		alignItems : 'center'
	}
});
