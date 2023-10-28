import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        marginTop: "15%"
    },
    box: {
        width: "90%",
        height: 200,
        borderRadius: 10,
        backgroundColor: "#f2f2f2",
        // elevation: 1,
        // shadowColor: '#000',
        // shadowOffset: { width: 0, height: 1 },
        // shadowOpacity: 0.2,
        // shadowRadius: 1,
        // alignItems:"center",
        // justifyContent:"center",
    },
    image:{
        width:120,
        height:120,
        position:"absolute",
        // left:"0%",
        bottom:"80%",
        right:"78%"
    },
    topPiece:{
        width:"90%",
        height:70,
        borderTopLeftRadius:10,
        borderTopRightRadius:10,
        top:"7%",
        right:1.5,
        transform:[{rotate:"-3deg"}],
    },
    productName:{
        fontSize:28,
        fontWeight:"700",
        color:"white",
        left:"30%"
    },
    saveButton:{
        width:50,
        height:50,
        borderRadius:20,
        backgroundColor:"rgba(58,58,58,0.1)",
        left:"80%",
        bottom:"60%",
        alignItems:"center",
        justifyContent:"center"
    },
    description:{
        fontSize:16,
        fontWeight:"400",
        color:"gray",
        left:"35%",
        bottom:"20%"
    },
    price:{
        height:60,
        width:80,
        backgroundColor:"white",
        borderRadius:10,
        alignItems:"center",
        justifyContent:"center"
    },
    priceView:{
        width:"100%",
        alignItems:"center",
        justifyContent:"center"
    },
    priceText:{
        fontSize:16,
        fontWeight:"800",
        color:"black"
    }
});

export default styles