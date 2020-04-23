import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';

import SerieCard from '../components/SerieCard.js';

import series from '../../series.json';

const isEven = number => number % 2 === 0;

function UserHome({ navigation }) {
    return(
        <View>
            <FlatList 
                data={series}
                renderItem={({ item, index }) =>  (
                    <SerieCard  
                    serie={item} 
                    isFirstColumn={isEven(index)}
                    onNavigate={() => navigation.navigate('SerieDetail', {serie: item})}
                    />
                )}
                keyExtractor={item => item.id}
                numColumns={2}
                ListHeaderComponent={props => (<View style={styles.marginTop}/>)}
                ListFooterComponent={props => (<View style={styles.marginBottom}/>)}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    marginTop:{
        marginTop: 5
    },
    marginBottom:{
        marginBottom: 5,
    }
})

export default UserHome;