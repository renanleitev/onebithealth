import React from "react";
import { Text, TextInput } from "react-native";
import styles from "./styles";

export default function InputImc(props){
    return (
        <>
            <Text style={styles.formLabel}>{props.title}</Text>
            <Text style={styles.errorMessage}>{props.errorMessage}</Text>
            <TextInput
            style={styles.input}
            onChangeText={props.setValue}
            value={props.value}
            placeholder={props.placeholder}
            keyboardType="numeric"
            />
        </>
    )
}