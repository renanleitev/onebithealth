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
  });
   
//Lembre-se sempre do export default, sem ele o seu estilo nao será exibido no seu componente.
export default styles;