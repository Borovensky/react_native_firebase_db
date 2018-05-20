import React from 'react';
import { View, Text, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const Input = ({ icon, placeholder, secureTextEntry, value, onChangeText, type, borderStyle, onBlur, onFocus }) => {

    return(
        <View style={styles.mainContainer}>
            <View style={styles.iconContainer}>
                <Icon name={icon} size={30} color="#999999" />
            </View>  
            <TextInput
                placeholder={placeholder}
                secureTextEntry={secureTextEntry}
                autoCorrect={false}
                value={value}
                type={type}
                onChangeText={onChangeText}
                style={[styles.inputStyle, { borderColor: borderStyle }]}
                underlineColorAndroid='transparent'
                onBlur={onBlur}
                onFocus={onFocus}
            />
        </View>
    );

};

const styles = {
    mainContainer: {
        marginTop: 10,
        width: '80%',
        flexDirection: 'row',
        alignItems: 'center',
    },
    iconContainer: {
        flex: .1,
        padding: 5
    },
    inputStyle: {
        flex: .9,
        color: '#000',
        paddingRight: 5,
        paddingLeft: 5,
        paddingBottom: 5,
        fontSize: 18,
        lineHeight: 23,
        borderBottomWidth: 1,   
    }
};

export { Input };