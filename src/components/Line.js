import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Line = ({ label = "", content = "-" }) => {


    return(
        <View style={styles.line}>
                <Text style={[
                    styles.cell, 
                    styles.label
                ]}>{ label } </Text>
                <Text style={[styles.cell, styles.content]}>{ content }</Text>
        </View> 
    );
}


const styles = StyleSheet.create({

    line: {
        paddingTop: 3,
        paddingBottom: 3,
        justifyContent: 'center'
    },

    cell: {
        fontSize: 20,
        paddingLeft: 5,
        flex:1
    },

    label: {
        fontWeight: 'bold'
    },

    content: {
        flex: 3
    },
})

export default Line;