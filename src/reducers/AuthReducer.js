import { 
    USER_SIGNIN,
    USER_SIGNIN_SUCCESS,
    CHECK_AUTH_SUCCESS,
    CHECK_AUTH_FAIL,
    DROP_STATE
} from '../actions/types';

const INITIAL_STATE = {
    user: null,
    loading: true
};

export default ( state = INITIAL_STATE, action ) => {
    
    switch(action.type) {
        case USER_SIGNIN: 
            return { ...state, loading: true };
        case USER_SIGNIN_SUCCESS: 
            return { ...state, loading: false, user: action.user };
        case CHECK_AUTH_SUCCESS: 
            return { ...state, loading: false};
        case CHECK_AUTH_FAIL:
            return { ...state, loading: false};
        case DROP_STATE: {
            return INITIAL_STATE;
        }
        default: 
            return state;
    };

};