import React, { Component } from 'react';
import { View, Text, StatusBar, TouchableOpacity, Image } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Colors from '../../utils/color';
import style from './style';

class History extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    goback() {
        this.props.navigation.navigate('Home');
    }




    render() {
        return (
            <View>
                <StatusBar backgroundColor={Colors.colormaincolour} />
                <View style={{ flexDirection: 'row' }}>
                    <TouchableOpacity onPress={() => this.goback()} style={style.barsview}>
                        <Ionicons name={'arrow-back'} size={30} style={{ color: Colors.colormaincolour }} />
                    </TouchableOpacity>
                    <View style={style.historyview}>
                        <Text style={style.texthistory}>History</Text>
                    </View>
                </View>
            </View>
        )
    }
}

export default History;