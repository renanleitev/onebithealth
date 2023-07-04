import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    //aqui o estilos dos nosso inputs, personalizados com bordas arredondadas 
    input: {
        width: "90%",
        borderRadius: 50,
        borderColor: "#ffffff",
        backgroundColor: "#f6f6f6",
        height: 40,
        margin: 12,
        borderWidth: 1,
        paddingLeft: 10,
    },
    //formLabel é o nome dos nossos inputs que ficara acima deles
    formLabel: {
        color: "#000000",
        fontSize: 18,
        paddingLeft: 20,
    },
    // errorMessage é responsável por exibir a mensagem de erro
    errorMessage: {
        fontSize: 12,
        color: "red",
        fontWeight: "bold",
        paddingLeft: 20,
    },
});

export default styles;