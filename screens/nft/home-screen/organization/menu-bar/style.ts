import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
        width:"100%",
        height:"10%",
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-evenly"
    },
    menu:{
        width:"25%",
        height:"70%",
        // backgroundColor:"#0047AB",
        borderRadius:10,
        alignItems:"center",
        justifyContent:"center",
    },
    text:{
        fontSize:14,
        color:"gray",
        fontWeight:"600"
    },
    bar:{
        width:"25%",
        height:"65%",
        borderRadius:50,
        backgroundColor:"#0047AB",
        position:"absolute",
        shadowColor: "#0047AB",
        shadowOffset: {
            width: 2,
            height: 5,
        },
        shadowOpacity: 0.22,
        shadowRadius: 4.22,
        
        elevation: 3,
    }
});

export default styles