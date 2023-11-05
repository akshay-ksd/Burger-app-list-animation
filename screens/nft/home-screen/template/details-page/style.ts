import { StyleSheet } from "react-native";
const w = 50
const styles = StyleSheet.create({

    container:{
        width:"100%",
        height:"86%",
        backgroundColor:"white",
        borderBottomLeftRadius:30,
        borderBottomRightRadius:30
    },
    round:{
        width:w-10,
        height:w+20,
        backgroundColor:"white",
        position:"absolute",
        top:"92%",
        left:"20%",
        borderRadius:w
    }
});

export default styles