import { StyleSheet } from "react-native";
import Colors from "../../utils/color";
export default StyleSheet.create({
    mainview:{
        flex:1
    },
    secview: {
        flex:1,
        backgroundColor:Colors.colorwhite
    },
    barsview: {
        position: 'absolute',
        left: 30,
        marginTop: 10
    },
    notiview: {
        position: 'absolute',
        right: 30,
        marginTop: 10
    },
    icimgview:{
        alignItems:'center',
        height:70,
        justifyContent:'center'
    },
    productsview:{
        width:'95%',
        height:150,
        backgroundColor:'#007bff',
        alignSelf:'center'
    },
    icontextview:{
        width:'70%',
        height:120,
        justifyContent:'center',
        paddingLeft:20
    },
    number1:{
        fontSize:30,
        fontWeight:'bold',
        color:Colors.colorwhite,
        marginVertical:10

    },
    newproducttext:{
        fontSize:20,
        color:Colors.colorwhite
    },
    iconbagview:{
       justifyContent:'center',
       width:'30%',
    },
    moreinfiview:{
        width:'100%',
        height:30,
        backgroundColor:'#007bff',
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'row'
    },
    textmoreinfo:{
        fontSize:15,
        color:Colors.colorwhite
    },
    adminview:{
        marginTop:30,
        width:'95%',
        height:150,
        backgroundColor:'#28a745',
        alignSelf:'center'
},
moreinfiviewadmin:{
    width:'100%',
    height:30,
    backgroundColor:'#28a745',
    justifyContent:'center',
    alignItems:'center',
    flexDirection:'row'
},
userview:{
    marginTop:30,
    width:'95%',
    height:150,
    backgroundColor:'#ffc107',
    alignSelf:'center'
},
moreinfiviewuser:{
    width:'100%',
    height:30,
    backgroundColor:'#ffc107',
    justifyContent:'center',
    alignItems:'center',
    flexDirection:'row'
},
ticketview:{
    marginTop:30,
    width:'95%',
    height:150,
    backgroundColor:'#e83e8c',
    alignSelf:'center'
},
moreinfiviewticket:{
    width:'100%',
    height:30,
    backgroundColor:'#e83e8c',
    justifyContent:'center',
    alignItems:'center',
    flexDirection:'row'
}






})