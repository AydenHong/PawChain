import React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet,
} from 'react-native';

export default class CommentCell extends Component {
    static defaultProps = {
        id: ' ',
        comment: '등록된 댓글이 없습니다.',
        key: 0
    };

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.id}>{this.props.id}</Text>
                <Text>{this.props.comment}</Text>


            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center'
    },
    id: {
        fontWeight: 'bold',
        marginRight: 10
    },
    comm: {

    }
});
