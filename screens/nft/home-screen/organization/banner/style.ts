import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "59%",
        alignItems: "center",
        justifyContent: "center",
    },
    box: {
        width: "85%",
        height: "95%",
        borderRadius: 40,
        marginTop: 30,
        backgroundColor: "#F3FFFF",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,

        elevation: 2,
    },
    image: {
        width: "100%",
        height: "80%",
        borderRadius: 40,
    },
    details:{
        width:"100%",
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between",
        height:"20%",
        paddingHorizontal:"10%"
    },
    title:{
        fontSize:20,
        fontWeight:"500"
    },
    users:{
        height:"100%",
        flexDirection:"row",
        alignItems:"center",
    },
    thumb:{
        width:40,
        height:40,
        borderRadius:40
    }
});

export default styles