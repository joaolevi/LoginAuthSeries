import React from 'react';
import { 
    View, 
    Text, 
    StyleSheet, 
    Dimensions, 
    Image, 
    TouchableOpacity 
} from 'react-native';

export default function SerieCard({ serie, isFirstColumn, onNavigate }) {
  return (
    <TouchableOpacity 
    onPress={() => onNavigate(serie)}
    style={[
        styles.container, 
        isFirstColumn 
        ? styles.firstColumn
        : styles.lastColumn
        ]}>
            <View style={styles.card}>
                <Image 
                    source={{uri: serie.img}}
                    aspectRatio={1}
                    resizeMode='cover'
                />
                <View style={styles.cardTitleWrapper}>
                    <Text style={styles.cardTitle}>{`${serie.title}`}</Text>
                </View>
            </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
    container: {
        // flex:0.5,
        padding:5,
        width: '50%',
        height: Dimensions.get('window').width / 2,
        // borderWidth: 1,
        // borderColor: 'red'

    },

    card: {
        flex:1,
        borderWidth: 1,
    },

    cardTitleWrapper: {
        backgroundColor: '#0D0628',
        height: 30,
        position: 'absolute',
        justifyContent: 'center',
        bottom: 0,
        opacity: 0.8,
        width: '100%',

        paddingTop: 10,
        paddingBottom: 15,

        paddingRight: 0,
        paddingLeft: 0,
    },

    cardTitle:{
        color: 'white',
        fontSize: 13
    },

    firstColumn:{
        paddingLeft:10,
    },

    lastColumn:{
        paddingRight: 10
    }
})
