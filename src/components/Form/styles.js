import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    //formContext é a area que ficara em torno do nosso form
    formContext: {
      flex: 1,
      backgroundColor: "#ffffff",
      marginTop: 30,
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
      alignItems: "center",
      paddingTop: 10,
    },
    //form é um componente filho de formContext e nele ficara nossos inputs e etc..
    form: {
      width: "100%",
    },
    //formLabel é o nome dos nossos inputs que ficara acima deles
    formLabel: {
      color: "#000000",
      fontSize: 18,
      paddingLeft: 20,
    },
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
    // errorMessage é responsável por exibir a mensagem de erro
    errorMessage: {
      fontSize: 12,
      color: "red",
      fontWeight: "bold",
      paddingLeft: 20,
    }
  });
   
//Lembre-se sempre do export default, sem ele o seu estilo nao será exibido no seu componente.
export default styles;