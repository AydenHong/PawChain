import React, { Component } from 'react'
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native'
import {
    Ionicons,
    MaterialCommunityIcons,
    FontAwesome
} from '@expo/vector-icons';
export default class IconText extends Component {
    static defaultProps = {
        iconName: "ios-person",
        type: true

    };
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        if (this.props.type) {
            return (
                <TouchableOpacity
                    style={styles.toucha}
                >
                    <Ionicons
                        name={this.props.iconName}
                        size={20}
                        color={"#F75356"}
                        style={styles.iconstyle}
                    />
                    <Text
                        style={styles.texts}
                    >
                        {this.props.children}
                    </Text>
                </TouchableOpacity>
            )
        } else {
            return (

                <TouchableOpacity
                    style={styles.toucha}
                >

                    <MaterialCommunityIcons
                        name={this.props.iconName}
                        size={20}
                        color={"#F75356"}
                        style={styles.iconstyle}
                    />
                    <Text
                        style={styles.texts}
                    >
                        {this.props.children}
                    </Text>
                </TouchableOpacity>
            )
        }

    }
}
const styles = StyleSheet.create({
    toucha: {
        flexDirection: "row",
        height: 40,
        alignItems: "center",
        padding: 5,

    },
    texts: {
        fontSize: 12,

    },
    iconstyle: {
        marginRight: 5
    }
})