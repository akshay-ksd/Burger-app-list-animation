import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
        width:"100%",
        paddingHorizontal:"5%",
        height:"10%",
        justifyContent:"center"
    },
    brandName:{
        fontSize:28,
        fontWeight:"600",
        color:"black",
    },
    textView:{
        width:"100%",
        flexDirection:"row",
    },
    searchView:{
        width:"100%",
        height:"35%",
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between",
        marginTop:"5%"
    },
    box:{
        width:"80%",
        height:"100%",
        backgroundColor:"#f2f2f2",
        borderRadius:10,
        borderColor:"#d3d3d3",
        borderWidth:0.5,
        flexDirection:"row",
        alignItems:"center",
        paddingLeft:"5%"
    },
    input:{
        fontSize:14,
        color:"gray",
        marginLeft:"5%"
    },
    filterButton:{
        height:"100%",
        padding:"2%",
        alignItems:"center",
        justifyContent:"center",
        backgroundColor:"#f2f2f2",
        borderRadius:10,
        width:"15%",
        borderColor:"#d3d3d3",
        borderWidth:0.5,
    }
});

export default styles