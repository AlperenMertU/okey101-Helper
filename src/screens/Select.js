import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

const Select = () => {
    const data = [
        { id: 1, title: 'Kart 1' },
        { id: 2, title: 'Kart 2' },
        { id: 3, title: 'Kart 3' },
        { id: 4, title: 'Kart 4' },
        { id: 5, title: 'Kart 5' },
        { id: 6, title: 'Kart 6' },
        { id: 7, title: 'Kart 7' },
        { id: 8, title: 'Kart 8' },
        { id: 9, title: 'Kart 9' },
        { id: 10, title: 'Kart 10' },
        { id: 11, title: 'Kart 11' },
        { id: 12, title: 'Kart 12' },
        { id: 13, title: 'Kart 13' },
        { id: 14, title: 'Kart 14' },
        { id: 15, title: 'Kart 15' },
        { id: 16, title: 'Kart 16' },
        { id: 17, title: 'Kart 17' },
    ]

   


    return (
        <View style={styles.container}>
        {data.map((item) => (
            <Text key={item.id} style={styles.text}>
                {item.id}
            </Text>
        ))}
    </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexWrap: 'wrap',
        flexDirection: 'row',
    },
    text: {
        paddingTop:55,
        color: 'lightblue',
        margin:15,
    },
})

export default Select;
