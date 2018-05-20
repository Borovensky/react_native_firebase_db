import React from 'react';
import { View, Text } from 'react-native';

const ErrorMessage = ({ error }) => {
    
    return (
        <View style={styles.cardContainer}>
            <Text style={styles.text}>{ error }</Text>
        </View>
    );

};

const styles = {
    cardContainer: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        color: 'red'
    }
};

export { ErrorMessage };