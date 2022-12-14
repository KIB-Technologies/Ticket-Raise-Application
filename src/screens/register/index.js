import React, { Component } from 'react';
import { View, Text, Image, StatusBar, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import Colors from '../../utils/color';
import style from './style';
import Zocial from 'react-native-vector-icons/Zocial';
import Feather from 'react-native-vector-icons/Feather';


class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: true,
            iseye:'',
            email: '',
            password: '',

        }
    }

    componentDidMount = async () => {

    }

    signin(){
        this.props.navigation.navigate('Login')
    }

    handleeye(){
        let {visible,iseye} = this.state;
        this.setState({visible : !visible})
        this.setState({iseye : !iseye})
    }

    continue(){
        this.props.navigation.replace('Root');
    }


    render() {
        let { iseye, visible, } = this.state
        return (
            <View style={style.mainview}>
                <StatusBar backgroundColor={Colors.colormaincolour} />
                <View style={style.secview}>
                    <View style={style.imageview}>
                        <Image source={require('../../images/logo.png')} resizeMode={'contain'} style={{ width: 300, height: 100 }} />
                    </View>
                    <View style={style.loginview}>
                        <Text style={style.textlogin}>Registration</Text>
                    </View>
                    <ScrollView>
                    <View style={{ marginTop:20, }}>
                        <View style={style.flexpass}>
                            <TextInput placeholder='First Name' placeholderTextColor={Colors.colorgrey}
                                onChangeText={(email) => this.setState({ email: email })}
                                style={{ width: '80%', marginLeft: 20, fontSize: 15,color:Colors.colorwhite}}
                            />
                            <View style={style.iconset}>
                                <Feather name={'user'} size={22} style={{ color: Colors.colorwhite}} />
                            </View>
                        </View>
                        <View style={style.flexpass}>
                            <TextInput placeholder='Last Name' placeholderTextColor={Colors.colorgrey}
                                onChangeText={(email) => this.setState({ email: email })}
                                style={{ width: '80%', marginLeft: 20, fontSize: 15,color:Colors.colorwhite}}
                            />
                            <View style={style.iconset}>
                                <Feather name={'user'} size={22} style={{ color: Colors.colorwhite}} />
                            </View>
                        </View>
                        <View style={style.flexpass}>
                            <TextInput placeholder='Phone' placeholderTextColor={Colors.colorgrey}
                                onChangeText={(email) => this.setState({ email: email })}
                                style={{ width: '80%', marginLeft: 20, fontSize: 15,color:Colors.colorwhite}}
                            />
                            <View style={style.iconset}>
                                <Feather name={'phone'} size={22} style={{ color: Colors.colorwhite}} />
                            </View>
                        </View>
                        <View style={style.flexpass}>
                            <TextInput placeholder='Email id' placeholderTextColor={Colors.colorgrey}
                                onChangeText={(email) => this.setState({ email: email })}
                                style={{ width: '80%', marginLeft: 20, fontSize: 15,color:Colors.colorwhite}}
                            />
                            <View style={style.iconset}>
                                <Zocial name={'email'} size={22} style={{ color: Colors.colorwhite}} />
                            </View>
                        </View>
                        <View style={style.flexpass}>
                            <TextInput placeholder='Password' placeholderTextColor={Colors.colorgrey}
                                secureTextEntry={visible}
                                onChangeText={(password) => this.setState({ password: password })}
                                style={{ width: '80%', marginLeft: 20, fontSize: 15, fontWeight: 'bold', color:Colors.colorwhite }}
                            />
                            <TouchableOpacity onPress={() => this.handleeye()} style={style.iconset}>
                                <Feather name={iseye ? 'eye' : 'eye-off'} size={22} style={{ color: Colors.colorwhite }} />
                            </TouchableOpacity>
                        </View>
                        <TouchableOpacity onPress={() => this.continue()} style={style.button}>
                            <Text style={style.textcontnue}>Registration</Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => this.signin()} style={style.signinview}>
                            <Text style={{ color: '#337ab7' }}>You have an account? Log In</Text>
                        </TouchableOpacity>
                    </View>
                    </ScrollView>

                </View>

            </View>
        )
    }

}
export default Register;