import React from 'react';
import { StyleSheet, View, Text, } from 'react-native';

function FormRow( props ) {
    const { children, first, last } = props;

    return(
        <View style={[styles.container, first === true ? styles.first : last === true ? styles.last : null]}>
            {children}
        </View>
    );
}

const styles = StyleSheet.create({

    container: {
        padding: 10,
        flexDirection: 'column'
    },

    first: {
        padding: 10,
    },

    last: {
        paddingBottom: 10
    }

})

export default FormRow;