import React from 'react';
import { View, Text, FlatList } from 'react-native';

import SerieCard from '../components/SerieCard.js';

import series from '../../series.json';

function UserHome() {
    return(
        <View>
            <FlatList 
                data={series}
                renderItem={({ item }) =>  (
                    <SerieCard  serie={item} />
                )}
                keyExtractor={item => item.id}
                numColumns={2}
            />
        </View>
    )
}

export default UserHome;