import React , {Component} from 'react';
import {View , Text ,TouchableOpacity,StatusBar,} from 'react-native';
import style from './style'; 
import Ionicons from 'react-native-vector-icons/Ionicons';
import Colors from '../../utils/color';

class Assignticket extends React.Component{
    constructor(props){
        super(props);
        this.state ={

        }
    }

    goback() {
        this.props.navigation.navigate('Home');
    }


    render(){
        return(
            <View>
            <StatusBar backgroundColor={Colors.colormaincolour} />
            <View style={{flexDirection:'row'}}>
                <TouchableOpacity onPress={() => this.goback()} style={style.barsview}>
                    <Ionicons name={'arrow-back'} size={30} style={{ color: Colors.colormaincolour }} />
                </TouchableOpacity>
                <View style={style.historyview}>
                    <Text style={style.texthistory}>Assign Ticket</Text>
                </View>
            </View>
        </View>
        )
    }
} 

export default Assignticket;