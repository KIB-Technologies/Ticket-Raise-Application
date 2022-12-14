import { StyleSheet } from "react-native";
import Colors from "../../utils/color";
export default StyleSheet.create({

    mainview: {
        backgroundColor: Colors.colormaincolour,
        flex: 1
    },
    secview: {
        flex: 1,
    },
    imageview: {
        alignItems: 'center',
        marginTop: 20,
    },
    loginview:{
        justifyContent:'center',
        alignItems:'center',
        marginTop:30
    },
    textlogin:{
        color:Colors.colorwhite,
        fontSize:40
    },
    textsign:{
        color:Colors.colorwhite,
        fontSize:20,
        marginTop:20
    },
    flexpass:{
        flexDirection:'row',
        backgroundColor:Colors.colortextinput,
        width:'80%',
        borderRadius:10,
        marginTop:20,
        alignSelf:'center',
        borderWidth:0.8,
        borderColor:'powderblue'
     },

     iconset:{
         color:Colors.colorBlack,
         width:'10%',
         alignSelf:'center',
         marginRight:30
     },
     button:{
        backgroundColor:Colors.colorbutton,
        padding:15,
        width:'80%',
        alignSelf:'center',
        borderRadius:20,
        justifyContent:'center',
        alignItems:'center'
     },
     textcontnue:{
        color:Colors.colorwhite,
        fontSize:20,
        fontWeight:'bold'
     },
     forgotview:{
        marginVertical:30,
        alignItems:'center'
     },
     signinview:{
        marginVertical:50,
        alignItems:'center'
     }





})