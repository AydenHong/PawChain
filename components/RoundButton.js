import React, { Component } from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';

import { Ionicons } from '@expo/vector-icons';


export default class RoundButton extends Component {
    static defaultProps = {
        title: 'Button',
        onPress: () => { },
        color: 'white'
    };

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <TouchableOpacity style={[styles.touchWrap]}>
                <View style={styles.container}>
                    {this.props.iconName && (
                        <Ionicons
                            style={{ marginRight: 10 }}
                            name={this.props.iconName}
                            color={this.props.color}
                            size={25}
                        />
                    )}
                    <Text style={styles.title}>{this.props.title}</Text>
                </View>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    touchWrap: {
        alignSelf: 'center',
        flexDirection: 'row',
        height: 50,
        width: 350,
    },
    container: {
        flexGrow: 1,
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: '#aaa',
        backgroundColor: 'tomato',
        justifyContent: 'center',
        borderRadius: 10
    },
    title: {
        color: '#fff',
        fontSize: 20
    }
});
