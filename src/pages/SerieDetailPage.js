import React from 'react';
import { ScrollView, Image, StyleSheet } from 'react-native';

import Line from '../components/Line';

export default function SerieDetail({ route }) {

    const { title, gender, img, rate, description } = route.params.serie

  return (
    <ScrollView>
        <Image 
        style={styles.img}
        source={{uri: img}}
        />
        <Line label="Título" content={title}/>
        <Line label="Gênero" content={gender}/>
        <Line label="Rate" content={rate}/>
        <Line label="Descrição" content={description}/>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
    img: {
        aspectRatio:1,
    }
})
