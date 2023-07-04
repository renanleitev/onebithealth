import React, { useState } from "react";
import { View, Vibration, Keyboard, Pressable } from "react-native";
import ResultImc from "../ResultImc/index";
import ListImc from "../ListImc";
import styles from "./styles";
import changeImcLevel from "../../services/changeImcLevel";
import ButtonImc from "../ButtonImc";
import InputImc from "../InputImc";
 
export default function Form() {
    const [height, setHeight] = useState(null);
    const [weight, setWeight] = useState(null);
    const [imc, setImc] = useState(null);
    const [messageImc, setMessageImc] = useState("Preencha o peso e a altura");
    const [imcLevel, setImcLevel] = useState(null);
    const [textButton, setTextButton] = useState("Calcular");
    const [errorMessage, setErrorMessage] = useState(null);
    const [imcList, setImcList] = useState([]);
    function calculateImc(){
        // corrigindo erro de vírgula, que pode aparecer no IOS (Apple)
        const heightFormat = height.replace(",", ".");
        // calculando o IMC e fixando para dois digitos (Ex: 25.27)
        const resultImc = (weight / (heightFormat * heightFormat)).toFixed(2);
        // para cada item, o id deve ser único (garantir que não haverá duplicidade)
        setImcList((arr) => [...arr, {id: new Date().getTime(), imc: resultImc}]);
        setImc(resultImc);
        // identificando o nível de IMC
        changeImcLevel(resultImc, setImcLevel);
        // zerando o peso, a altura e a mensagem de erro, após o cálculo do imc
        setHeight(null);
        setWeight(null);
        setErrorMessage(null);
        // após calcular o imc, exibe os resultados
        setMessageImc("Seu IMC é igual a:");
        setTextButton("Calcular Novamente");
        // fechando o teclado, para exibir os resultados para o usuário
        Keyboard.dismiss();
    }
    function verificationImc(){
        if (imc == null) {
            // vibrar o celular para indicar o erro
            Vibration.vibrate();
            setErrorMessage("Campo obrigatário");
        } 
        // se o peso e a altura não estiverem preenchidos, volta para o padrão               
        setImc(null);
        setTextButton("Calcular");
        setMessageImc("Preencha o peso e a altura");
        setImcLevel(null);
    }
    function validationImc() {
        if (weight != null && height != null) {
            calculateImc();
        } else {
            verificationImc();
        }
    }
    return (
        <View style={styles.formContext}>
            {/* se o imc for nulo, exibe o formulário */}
            {imc === null && 
            <Pressable onPress={Keyboard.dismiss} style={styles.form}>
                <InputImc 
                value={height} 
                setValue={setHeight} 
                title={"Altura"} 
                errorMessage={errorMessage} 
                placeholder={"Ex: 1.75"}/>
                <InputImc 
                value={weight} 
                setValue={setWeight} 
                title={"Peso"} 
                errorMessage={errorMessage} 
                placeholder={"Ex: 90.5"}/>
            </Pressable>}
            {/* se o imc não for nulo, exibe o resultado */}
            <ButtonImc textButton={textButton} functionButton={validationImc}/>
            <ResultImc messageResultImc={messageImc} resultImc={imc} levelImc={imcLevel}/>
            {/* Se houver itens na lista, exibe os resultados e o botão de reset */}
            {(imc !== null && imcList.length > 0) && 
            <ListImc array={imcList} setArray={setImcList}/>}
        </View>
    );
}