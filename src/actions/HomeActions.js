import firebase from 'firebase';
import { AsyncStorage } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { GET_ITEMS_SUCCESS } from './types';

export const getItems = () => dispatch => {

    AsyncStorage.getItem('user').then((user) => {
        firebase.database().ref(`user/${ user }`)
            .on('value', snapshot => {          
                dispatch({ type: GET_ITEMS_SUCCESS, data: snapshot.val() })
            });
    });
    
};