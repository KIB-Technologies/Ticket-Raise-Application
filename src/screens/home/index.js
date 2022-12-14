import React, { Component } from 'react';
import { View, Text, Image, StatusBar, TouchableOpacity, ScrollView } from 'react-native';
import Colors from '../../utils/color';
import style from './style';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Foundation from 'react-native-vector-icons/Foundation';
import Feather from 'react-native-vector-icons/Feather';





class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {


        }
    }

    componentDidMount = async () => {

    }


    opendrawer() {
        this.props.navigation.toggleDrawer();
    }

    render() {
        return (
            <View style={style.mainview}>
                <StatusBar backgroundColor={Colors.colormaincolour} />
                <View style={style.icimgview}>
                    <TouchableOpacity onPress={() => this.opendrawer()} style={style.barsview}>
                        <FontAwesome name={'bars'} size={30} style={{ color: Colors.colormaincolour }} />
                    </TouchableOpacity>
                    <TouchableOpacity style={style.notiview}>
                        <Image source={require('../../images/logo.png')} resizeMode={'contain'} style={{ width: 70, height: 40 }} />
                    </TouchableOpacity>
                </View>
                <View style={style.secview}>
                    <ScrollView>
                        <View style={style.productsview}>
                            <View style={{ flexDirection: 'row' }}>
                                <View style={style.icontextview}>
                                    <Text style={style.number1}>1</Text>
                                    <Text style={style.newproducttext}>New Products</Text>
                                </View>
                                <View style={style.iconbagview}>
                                    <SimpleLineIcons name={'handbag'} size={50} style={{ color: Colors.colorwhite }} />
                                </View>
                            </View>
                            <TouchableOpacity style={style.moreinfiview}>
                                <Text style={style.textmoreinfo}>More info  </Text>
                                <Feather name={'arrow-right-circle'} size={20} style={{ color: Colors.colorwhite }} />
                            </TouchableOpacity>
                        </View>

                        <View style={style.adminview}>
                            <View style={{ flexDirection: 'row' }}>
                                <View style={style.icontextview}>
                                    <Text style={style.number1}>1</Text>
                                    <Text style={style.newproducttext}>Sub Admin</Text>
                                </View>
                                <View style={style.iconbagview}>
                                    <Foundation name={'graph-bar'} size={50} style={{ color: Colors.colorwhite }} />
                                </View>
                            </View>
                            <TouchableOpacity style={style.moreinfiviewadmin}>
                                <Text style={style.textmoreinfo}>More info  </Text>
                                <Feather name={'arrow-right-circle'} size={20} style={{ color: Colors.colorwhite }} />
                            </TouchableOpacity>
                        </View>

                        <View style={style.userview}>
                            <View style={{ flexDirection: 'row' }}>
                                <View style={style.icontextview}>
                                    <Text style={{
                                        fontSize:30, fontWeight: 'bold', color: Colors.colorBlack,
                                        marginVertical: 20
                                    }}>4</Text>
                                    <Text style={{ fontSize:20,color:Colors.colorBlack}}>Users</Text>
                                </View>
                                <View style={style.iconbagview}>
                                    <Feather name={'user-plus'} size={50} style={{ color: Colors.colorwhite }} />
                                </View>
                            </View>
                            <TouchableOpacity style={style.moreinfiviewuser}>
                                <Text style={{ fontSize:15,color:Colors.colorBlack}}>More info  </Text>
                                <Feather name={'arrow-right-circle'} size={20} style={{ color: Colors.colorBlack }} />
                            </TouchableOpacity>
                        </View>

                        <View style={style.ticketview}>
                            <View style={{ flexDirection: 'row' }}>
                                <View style={style.icontextview}>
                                    <Text style={style.number1}>1</Text>
                                    <Text style={style.newproducttext}>Tickets</Text>
                                </View>
                                <View style={style.iconbagview}>
                                    <Foundation name={'graph-pie'} size={70} style={{ color: Colors.colorwhite }} />
                                </View>
                            </View>
                            <TouchableOpacity style={style.moreinfiviewticket}>
                                <Text style={style.textmoreinfo}>More info  </Text>
                                <Feather name={'arrow-right-circle'} size={20} style={{ color: Colors.colorwhite }} />
                            </TouchableOpacity>
                        </View>


                        

                    </ScrollView>
                </View>
            </View>
        )
    }

}
export default Home;