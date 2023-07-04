import React, { useState } from "react";
import { Text, 
    TextInput, 
    View, 
    TouchableOpacity, 
    Vibration, 
    Keyboard, 
    Pressable,  } from "react-native";
import ResultImc from "../ResultImc/index";
import styles from "./styles";
 
export default function Form() {
    const [height, setHeight] = useState(null);
    const [weight, setWeight] = useState(null);
    const [imc, setImc] = useState(null);
    const [messageImc, setMessageImc] = useState("Preencha o peso e a altura");
    const [imcLevel, setImcLevel] = useState(null);
    const [textButton, setTextButton] = useState("Calcular");
    const [errorMessage, setErrorMessage] = useState(null);
    function imcCalc(){
        const heightFormat = height.replace(",", ".");
        const resultImc = (weight / (heightFormat * heightFormat)).toFixed(2);
        if (resultImc > 17 && resultImc <= 18.49) {
            setImcLevel("Abaixo do peso");
        } else if (resultImc >= 18.5 && resultImc <= 24.99) {
            setImcLevel("Peso normal");
        } else if (resultImc >= 25 && resultImc <= 29.99) {
            setImcLevel("Acima do peso");
        } else if (resultImc >= 30 && resultImc <= 34.99) {
            setImcLevel("Obesidade grau 1");
        } else if (resultImc >= 35 && resultImc <= 40) {
            setImcLevel("Obesidade grau 2");
        } else if (resultImc > 40) {
            setImcLevel("Obesidade grau 3");
        } else {
            setImcLevel("Muito abaixo do peso");
        }
        setImc(resultImc);
    }
    function verificationImc(){
        if (imc == null) {
            // Vibrar o celular para indicar o erro
            Vibration.vibrate();
            setErrorMessage("Campo obrigatário");
            return;
        }    
    }
    function validationImc() {
        // Se o peso e a altura estiverem preenchidos
        if (weight != null && height != null) {
            imcCalc();
            setHeight(null);
            setWeight(null);
            setMessageImc("Seu imc é igual a:");
            setTextButton("Calcular Novamente");
            setErrorMessage(null);
            // Fechando o teclado, para exibir os resultados para o usuário
            Keyboard.dismiss();
            return
        }
        // Se o peso e a altura não estiverem preenchidos, volta para o padrão
        verificationImc();
        setImc(null);
        setTextButton("Calcular");
        setMessageImc("Preencha o peso e a altura");
        setImcLevel(null);
    }
    return (
        <Pressable onPress={Keyboard.dismiss} style={styles.formContext}>
            <View style={styles.form}>
                <Text style={styles.formLabel}>Altura</Text>
                <Text style={styles.errorMessage}>{errorMessage}</Text>
                <TextInput
                style={styles.input}
                onChangeText={setHeight}
                value={height}
                placeholder="Ex: 1.75"
                keyboardType="numeric"
                />
                <Text style={styles.formLabel}>Peso</Text>
                <Text style={styles.errorMessage}>{errorMessage}</Text>
                <TextInput
                style={styles.input}
                onChangeText={setWeight}
                value={weight}
                placeholder="Ex: 86.300"
                keyboardType="numeric"
                />
                <TouchableOpacity
                style={styles.buttonCalculator}
                title={textButton} 
                onPress={() => validationImc()}>
                    <Text style={styles.textButtonCalculator}>{textButton}</Text>
                </TouchableOpacity>
            </View>
            <ResultImc messageResultIMc={messageImc} resultImc={imc} levelImc={imcLevel}/>
        </Pressable>
    );
}