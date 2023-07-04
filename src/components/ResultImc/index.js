import React from "react";
import { Text, View, TouchableOpacity, Share } from "react-native";
import styles from "./styles";
 
export default function ResultImc(props) {
    const onShare = async () => {
        await Share.share({
            message: "Meu IMC hoje é: " + props.resultImc + ". Classificação: " + props.levelImc,
        });
    }
    return (
        <View style={styles.contextImc}>
            <View style={styles.boxShareButton}>
                {props.resultImc != null && 
                <TouchableOpacity onPress={onShare} style={styles.shared}>
                    <Text style={styles.sharedText}>Share</Text>
                </TouchableOpacity>}
            </View>
            <Text style={styles.titleResultImc}>
                {props.messageResultIMc}
            </Text>
            <Text style={styles.resultImc}>
                {props.resultImc}
            </Text>
            <Text style={styles.titleResultImc}>
                {props.levelImc}
            </Text>
        </View>
    );
}