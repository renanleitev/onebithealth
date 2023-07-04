import React, { useState } from "react";
import { Text, TextInput, View, TouchableOpacity } from "react-native";
import ResultImc from "../ResultImc/index";
import styles from "./styles";
 
export default function Form() {
    const [height, setHeight] = useState(null);
    const [weight, setWeight] = useState(null);
    const [imc, setImc] = useState(null);
    const [messageImc, setMessageImc] = useState("Preencha o peso e a altura");
    const [textButton, setTextButton] = useState("Calcular");
    function imcCalc(){
        return setImc((weight / (height * height)).toFixed(2));
     }
    function validationImc() {
        if (weight != null && height != null) {
            imcCalc();
            setHeight(null);
            setWeight(null);
            setMessageImc("Seu imc é igual a:");
            setTextButton("Calcular Novamente");
            return
        }
        setImc(null);
        setTextButton("Calcular");
        setMessageImc("Preencha o peso e a altura");
    }
    return (
        <View style={styles.formContext}>
            <View style={styles.form}>
                <Text style={styles.formLabel}>Altura</Text>
                <TextInput
                style={styles.input}
                onChangeText={setHeight}
                value={height}
                placeholder="Ex: 1.75"
                keyboardType="numeric"
                />
                <Text style={styles.formLabel}>Peso</Text>
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
            <ResultImc messageResultIMc={messageImc} resultImc={imc} />
        </View>
    );
}