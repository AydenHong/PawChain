import React from 'react'
import { StyleSheet, Text, TextInput, View, Button, Image, TouchableOpacity } from 'react-native'
import IconTextInput from '../components/IconTextInput';
import IconTextInput2 from '../components/IconTextInput2';
import * as firebase from 'firebase';

export default class SignUp extends React.Component {

  state = { ID: '',
            password: '',
            mobile: '',
            name: '',
            errorMessage: null }

handleSignUp = () => {
  // TODO: Firebase stuff...
  

  console.log('handleSignUp')
}

render() {
    return (
      <View style={styles.container}>
      <Image style={{width: 200, height: 200, resizeMode: 'contain'}}
      source={require('../assets/images/Logo.png')}
/>

        <IconTextInput
          iconName = 'ios-mail'
          placeholder="아이디"
          autoCapitalize="none"
          style={styles.textInput}
          onChangeText={ID => this.setState({ ID })}
          value={this.state.ID}
        />
        <IconTextInput2
          secureTextEntry
          iconName = 'ios-lock'
          placeholder="비밀번호"
          autoCapitalize="none"
          style={styles.textInput}
          onChangeText={password => this.setState({ password })}
          value={this.state.password}
        />
        <IconTextInput2
        secureTextEntry
        iconName = 'ios-lock'
        placeholder="비밀번호 확인"
        autoCapitalize="none"
        style={styles.textInput}
        onChangeText={password => this.setState({ password })}
        value={this.state.password}
      />
        <IconTextInput
          iconName = 'ios-call'
          placeholder="휴대폰 번호"
          autoCapitalize="none"
          style={styles.textInput}
          onChangeText={mobile => this.setState({ mobile })}
          value={this.state.mobile}
        />
        <IconTextInput
          placeholder="이름"
          autoCapitalize="none"
          style={styles.textInput}
          onChangeText={name => this.setState({ name })}
          value={this.state.name}
        />
        <TouchableOpacity title="회원 가입" onPress={this.handleSignUp} 
            onPress={() => Alert.alert('성공적으로 회원가입이 됐습니다.')}
            onPress={() => this.props.navigation.navigate('Login')}
            >
          <Text style={{fontSize: 20, color: 'tomato', fontWeight: 'bold', padding: 15}}>회원 가입</Text>
        </TouchableOpacity>
        <View style={{flexDirection: 'row'}}>
        <Text style={{paddingRight: 7}}>이미 회원가입을 하셨나요??</Text>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('Login')}>
            <Text style={{color: 'tomato', fontWeight: 'bold'}}>로그인</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textInput: {
    height: 40,
    width: '90%',
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: 8
  }
})
