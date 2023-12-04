import { StyleSheet } from "react-native";
import { color } from "../../../../../constants/color";

const styles = StyleSheet.create({
    container:{
        width:"100%",
        height:"8%",
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between",
        paddingHorizontal:"5%"
    },
    textView:{
        height:"100%",
        justifyContent:"space-evenly"
    },
    day:{
        fontSize:14,
        color:"gray",
        fontWeight:"700"
    },
    name:{
        fontSize:20,
        fontWeight:"700",
        color:color.black
    },
    imageView:{
        width:50,
        height:50,
        borderRadius:50,
        backgroundColor:"#fff",
        alignItems:"center",
        justifyContent:"center"
    },
    image:{
        width:30,
        height:30,
        borderRadius:30
    },
    dot:{
        width:5,
        height:5,
        borderRadius:5,
        backgroundColor:"red",
        position:"absolute",
        right:"2%",
        bottom:"70%"
    }
});

export default styles