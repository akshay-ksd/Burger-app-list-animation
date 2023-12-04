import { Dimensions, StyleSheet } from "react-native";
import { color } from "../../../../../constants/color";
const { height, width } = Dimensions.get("window")
const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "100%",
    },
    singleRender: {
        width: width,
        height: height - 170,
        alignItems: "center",
        // justifyContent:"center",
    },
    box: {
        width: "90%",
        height: "84%",
        borderRadius: 20,
        // backgroundColor: color.card,
        alignItems: "center",
        marginTop: "3%",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
        overflow:"hidden"
    },
    image: {
        width: "100%",
        height: "100%",
        borderRadius: 20,
        
        // marginTop:"3%"
    },
    nameView:{
        width:"100%",
        height:"10%",
        position:"absolute",
        bottom:"5%",
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between",
        paddingRight:"5%"
    },
    nameBox:{
        // width:"60%",
        height:"50%",
        backgroundColor:color.yellow,
        borderTopRightRadius:20,
        borderBottomRightRadius:20,
        paddingHorizontal:"5%",
        alignItems:"center",
        justifyContent:"center"
    },
    name:{
        fontSize:14,
        fontWeight:"700",
        color:"#000"
    },
    like:{
        height:40,
        width:40,
        borderRadius:40,
        alignItems:"center",
        justifyContent:"center",
        backgroundColor:color.lightGreen
    }
});

export default styles