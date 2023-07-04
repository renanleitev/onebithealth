import React from "react";
import styles from "./styles";
import { Text, TouchableOpacity } from "react-native";

export default function ButtonImc(props){
    return(
        <TouchableOpacity
        style={styles.buttonCalculator}
        title={props.textButton} 
        onPress={() => props.functionButton()}>
            <Text style={styles.textButtonCalculator}>{props.textButton}</Text>
        </TouchableOpacity>
    )
}