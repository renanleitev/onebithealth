import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    //buttonCalculator e o botão que irá chamar a função do calculo de imc 
    buttonCalculator: {
        borderRadius: 50,
        alignItems: "center",
        justifyContent: "center",
        width: "90%",
        backgroundColor: "#FF0043",
        paddingTop: 14,
        paddingBottom: 14,
        marginLeft: 12,
        marginTop: 10,
      },
    //textButtonCalculator é responsável por por estilizar o texto dentro dentro do button
    textButtonCalculator: {
        fontSize: 20,
        color: "#ffffff",
    },
});

export default styles;