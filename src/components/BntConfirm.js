import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, } from 'react-native';


export default function BntConfirm({ titulo, prop }) {
  return (
    <View>
        <TouchableOpacity style={styles.entrar} onPress={prop} >
            <Text style={styles.bntText}>{ titulo }</Text>
        </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        
    },

    entrar: {
        backgroundColor: 'black',
        marginHorizontal: 20,
        height: 35,
        borderRadius: 20,
        alignItems: 'center'
    },

    bntText: {
        color: 'white',
        fontSize: 25
    },
})