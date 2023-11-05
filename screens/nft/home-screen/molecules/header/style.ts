import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: 60,
        backgroundColor: "white",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: "5%"
    },
    menu: {
        width: 40,
        height: 40,
        borderRadius: 40,
        alignItems: "center",
        justifyContent: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        
        elevation: 3,
        backgroundColor:"white",
        paddingVertical:6
    },
    dot: {
        width: 5,
        height: 5,
        borderRadius: 5,
        backgroundColor: "#000"
    },
    subView: {
        width: "100%",
        height: "50%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-evenly",
        paddingHorizontal:5
    }
});

export default styles