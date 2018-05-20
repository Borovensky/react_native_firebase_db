import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

const Button = ({ onPress, children, style }) => {
    
    return(
        <TouchableOpacity onPress={onPress} style={[styles.buttonStyle, style]}>
            <Text style={styles.textStyle}>{children}</Text>
        </TouchableOpacity>
    );

};

const styles = {
    buttonStyle: {
        width: '80%',
        height: 40,
        backgroundColor: 'black',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 50
    },
    textStyle: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '600'
    }
};

export { Button };