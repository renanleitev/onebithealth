import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    // estilo do container da lista
    listContainer: {
        flex: 1,
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
    },
    // estilo da lista
    listImc: {
        marginTop: 20,
    },
    // estilo de cada item da lista
    resultImcItem: {
        fontSize: 30,
        color: "red",
        height: 50,
        width: "100%",
        paddingRight: 20,
    },
    // estilo do botão de reset
    textResetList: {
        color:"#ffffff",
        backgroundColor:"#1877f2",
        borderRadius:50,
        paddingBottom:5,
        paddingTop:5,
        fontWeight:"bold",
        paddingHorizontal:30,
    },
});

export default styles;