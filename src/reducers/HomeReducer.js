import { 
    GET_ITEMS_SUCCESS,
    DROP_STATE
} from '../actions/types';

const INITIAL_STATE = {
    data: [],
    loading: true
};

export default ( state = INITIAL_STATE, action ) => {
    
    switch(action.type) {
        case GET_ITEMS_SUCCESS:
            return { ...state, data: action.data, loading: false };
        case DROP_STATE: 
            return INITIAL_STATE;
        default: 
            return state;
    };

};