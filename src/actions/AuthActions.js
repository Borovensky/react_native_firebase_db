import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import { AsyncStorage } from 'react-native';
import { 
    USER_SIGNIN,
    USER_SIGNIN_SUCCESS,
    CHECK_AUTH_SUCCESS,
    CHECK_AUTH_FAIL,
    DROP_STATE
} from './types';

const signInUserSuccess = (dispatch, user) => {

    return AsyncStorage.setItem('user', user.user.uid, (error) => {
        if(error) {
            console.log(error);
        } else {
            dispatch({ type: USER_SIGNIN_SUCCESS, user });
            Actions.main();
        };
    });
    
};

export const checkAuth = () => dispatch => {

    AsyncStorage.getItem('user').then((user) => {
            if(user) {
                Actions.main();
            };
            dispatch({ type: CHECK_AUTH_SUCCESS });
        }).catch((error) => {
            dispatch({ type: CHECK_AUTH_FAIL });
        });
    
};

export const signIn = ({ email, password }) => {

    return dispatch => {
        
        dispatch({ type: USER_SIGNIN });

        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(user => signInUserSuccess(dispatch, user))
            .catch((error) => {
                firebase.auth().createUserWithEmailAndPassword(email, password)
                    .then(user => signInUserSuccess(dispatch, user))
                    .catch((error) => console.log(error));
            });

    };

};

export const signOut = () => dispatch => {
    AsyncStorage.removeItem('user').then(() => {
        firebase.auth().signOut();
        Actions.auth();
        dispatch({ type: DROP_STATE })
    });
}