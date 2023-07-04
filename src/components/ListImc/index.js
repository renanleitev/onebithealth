import React from 'react';
import { FlatList, Text, View } from 'react-native';
import styles from './styles';

export default function ListImc(props){
    function resetImcList(){
        props.setArray([]);
    }
    return(
        <View style={styles.listContainer}>
            <Text onPress={resetImcList} style={styles.textResetList}>Reset</Text>
            <FlatList 
            showsVerticalScrollIndicator={false}
            style={styles.listImc}
            data={[...props.array].reverse()}
            renderItem={({item}) => {
                return(
                    <Text style={styles.resultImcItem}>
                        Resultado IMC: {item.imc}
                    </Text>
            )}}
            keyExtractor={(item) => item.id}/>
        </View>
    )
}