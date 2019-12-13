import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'

export default class InfoText extends Component {
    static defaultProps = {
        title: 'null',
        content: 'null'
    };

    constructor(props) {
        super(props);
    }
    render() {
        return (
            <View style={styles.info}>
                <Text style={styles.title}>{this.props.title}</Text>
                <View style={{ marginLeft: "auto" }}>
                    <Text style={styles.content}>{this.props.content}</Text>

                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({

    info: {
        flexDirection: 'row',
        width: '100%',
        margin: 10
    },
    title: {
        color: "#F75356",
        fontSize: 20
    },
    content: {
        marginLeft: 'auto',
        color: "#F75356",
        fontSize: 20,


    }
});