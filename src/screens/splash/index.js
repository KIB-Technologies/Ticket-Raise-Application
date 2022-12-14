import React, {Component} from 'react';
import {View,Text,Image, StatusBar} from 'react-native';
import Colors from '../../utils/color';
import style from './style';
class Splash extends React.Component{
    constructor(props){
        super(props);
        this.state={

        }
    }

    componentDidMount = async () => {
        setTimeout(() => {
            this.props.navigation.navigate('Login')
        },1000);
    }

    render(){
        return(
            <View style={style.mainview}>
                <StatusBar backgroundColor={Colors.colormaincolour}/>
                <View style={style.imageview}>
                   <Image source={require('../../images/logo.png')} style={style.imagesplash} />
                </View>
            </View>
        )
    }

}
export default Splash;