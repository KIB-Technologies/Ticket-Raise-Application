import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator, DrawerContentScrollView } from '@react-navigation/drawer';
const { width, height } = Dimensions.get("window");
import { View, Text, StyleSheet, Dimensions, TouchableOpacity, Image } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Feather from 'react-native-vector-icons/Feather';
import Allticket from '../screens/allticket';
import Home from '../screens/home';
import History from '../screens/history';
import Profile from '../screens/profile';
import Register from '../screens/register';
import Login from '../screens/login';
import Assignticket from '../screens/assignticket';
import Splash from '../screens/splash';
import Colors from '../utils/color';
const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function CustomDrawer(props) {
    const [open1, setOpen1] = React.useState(false)
    return (
        <DrawerContentScrollView {...props} style={styles.menuContainer}>

            <View style={{ marginBottom: 10 }}>
                <TouchableOpacity style={styles.touchable_opacity}
                    onPress={() => { props.navigation.navigate('Profile') }}>
                    <View style={{ marginLeft: -30, marginVertical: 10 }}>
                        <Image source={require('../images/logo.png')} resizeMode='contain' style={styles.profile_dp} />
                    </View>
                    <View style={{ justifyContent: 'center', marginHorizontal: 5, }}>
                        <Text style={styles.drawertext}>
                            Update Your Profile </Text>
                    </View>
                </TouchableOpacity>
            </View>

            <View style={styles.draweritems}>
                <TouchableOpacity style={{ width: '100%', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}
                    onPress={() => { props.navigation.navigate('Home') }}>
                    <Entypo name={'home'} size={20} style={{ color: Colors.colorwhite }} />
                    <Text style={styles.drawertext1}>Dashboard</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.draweritems1}>
                <TouchableOpacity style={{ width: '100%', flexDirection: 'row', }}
                    onPress={() => setOpen1(!open1)}>
                    <MaterialCommunityIcons name="ticket" color={Colors.colorwhite} size={20} />
                    <Text style={{
                        color: Colors.colorwhite, fontSize: 18, fontWeight: '200', marginLeft: 10
                    }}>Tickets</Text>

                    <View style={{ position: 'absolute', right: 0, }}>
                        {open1 ? <MaterialIcons name="keyboard-arrow-up"
                            color={Colors.colorwhite} size={22} /> : <MaterialIcons name="keyboard-arrow-down"
                                color={Colors.colorwhite} size={22} />}
                    </View>
                </TouchableOpacity>
            </View>
            {open1 ? <View style={{ width: '100%', }}>
                <View style={{
                    width: '100%', marginTop: 10, paddingLeft: 20, padding: 8
                }}>
                    <TouchableOpacity style={{ width: '100%', flexDirection: 'row', alignItems: 'center' }}
                        onPress={() => props.navigation.navigate('Allticket')}>
                        <MaterialCommunityIcons name="radiobox-blank"
                            color={Colors.colorwhite} size={15} />
                        <Text
                            style={{ color: Colors.colorwhite, fontSize: 18, fontWeight: '200', marginLeft: 10 }}>
                            All Tickets</Text>
                    </TouchableOpacity>
                </View>
                <View style={{
                    width: '100%', marginVertical: 10, paddingLeft: 20, padding: 8,
                }}>
                    <TouchableOpacity style={{ width: '100%', flexDirection: 'row', alignItems: 'center' }}
                        onPress={() => { props.navigation.navigate('Assignticket') }}>
                        <MaterialCommunityIcons name="radiobox-blank" color={Colors.colorwhite} size={15} />
                        <Text style={{ color: Colors.colorwhite, fontSize: 18, fontWeight: '200', marginLeft: 10 }}>
                            Assign Tickets</Text>
                    </TouchableOpacity>
                </View>
            </View> : null}

            <View style={styles.draweritems}>
                <TouchableOpacity style={{ width: '100%', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}
                    onPress={() => { props.navigation.navigate('History') }}>
                    <MaterialCommunityIcons name={'history'} size={20} style={{ color: Colors.colorwhite }} />
                    <Text style={styles.drawertext1}>History</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.draweritems}>
                <TouchableOpacity style={{ width: '100%', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}
                    onPress={() => { props.navigation.navigate('Splash') }}>
                    <Entypo name={'log-out'} size={20} style={{ color: Colors.colorwhite }} />
                    <Text style={styles.drawertext1}>Logout</Text>
                </TouchableOpacity>
            </View>

        </DrawerContentScrollView>
    );
}
function Root() {
    return (
        <Drawer.Navigator initialRouteName="Home" screenOptions={{
            headerShown: false,
            headerStyle: { backgroundColor: 'transparent' },
            drawerPosition: 'left'
        }}
            drawerContent={(props) => < CustomDrawer {...props} />}>
            <Drawer.Screen name="Home" component={Home} options={{ headerShown: false }} />
            <Drawer.Screen name="Profile" component={Profile} options={{ headerShown: false }} />
            <Drawer.Screen name="Allticket" component={Allticket} options={{ headerShown: false }} />
            <Drawer.Screen name="Assignticket" component={Assignticket} options={{ headerShown: false }} />
            <Drawer.Screen name="History" component={History} options={{ headerShown: false }} />

        </Drawer.Navigator>
    )
}

export default function AppNavigator({ navigation }) {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName={'Splash'}>
                <Stack.Screen name="Splash" component={Splash} options={{ headerShown: false }} />
                <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
                <Stack.Screen name="Register" component={Register} options={{ headerShown: false }} />
                <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
                <Stack.Screen name="Root" component={Root} options={{ headerShown: false }} />

            </Stack.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    menuContainer: {
        flex: 1,
        backgroundColor: Colors.colormaincolour
    },
    menuItemsCard: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
    },
    circleContainer: {
        width: 50,
        height: 50,
        borderRadius: 25,
        padding: 10,
    },
    profile_dp: {
        height: 70,
        width: 70,
        borderRadius: 55,
        marginLeft: 20,
    },
    touchable_opacity: {
        alignItems: 'center',
        minHeight: 55,
        marginVertical: 5,
        width: '100%'
    },
    draweritems: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 20,
        padding: 10,
        borderBottomWidth: 0.5,
        borderColor: Colors.colorwhite,
        borderTopWidth: 0.5
    },
    draweritems1: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 20,
        padding: 10,
        borderBottomWidth: 0.5,
        borderColor: Colors.colorwhite,
        borderTopWidth: 0.5
    },
    drawertext: {
        fontSize: 15,
        color: Colors.colorwhite,
        fontWeight: 'bold'
    },
    drawertext1: {
        fontSize: 18,
        color: Colors.colorwhite,
        fontWeight: '200',
        marginLeft: 10
    }
});