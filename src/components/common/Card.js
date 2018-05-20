import React from 'react';
import { View } from 'react-native';

const Card = (props) => {
    
    return (
        <View style={[styles.cardContainer, props.style]}>
            {props.children}
        </View>
    );

};

const styles = {
    cardContainer: {
        backgroundColor: '#fff',
    }
}

export { Card }