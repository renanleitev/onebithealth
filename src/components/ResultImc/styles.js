import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  //contextImc será nosso componente pai
  contextImc: {
    flex:1,
    marginTop:20,
    paddingTop:15,
    alignItems:"center",
    width:"100%",
  },
  //no resultado do calculo do imc colocaremos esse estilo
  resultImc:{
    fontSize:48,
    color:"#ff0043",
    fontWeight:"bold",
  },
  //frase exibida abaixo do resultado 
  titleResultImc:{
    fontSize:18,
    color:"#ff0043",
    fontWeight:"bold",
  },
  // container com o botão de compartilhar
  boxShareButton:{
    width: "100%",
    alignItems:"center",
    marginBottom:10,
  },
  // estilo do botão de compartilhar
  shared:{
    backgroundColor:"#1877f2",
    borderRadius:50,
    paddingBottom:5,
    paddingTop:5,
  },
  // estilo do texto do botão de compartilhar
  sharedText:{
    color:"#ffffff",
    fontWeight:"bold",
    paddingHorizontal:30,
  },
});
   
   
export default styles;