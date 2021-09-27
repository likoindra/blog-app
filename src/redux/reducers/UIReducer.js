import {SET_ERRORS,CLEAR_ERRORS} from '../type';
// Tempat semua state yang berhubungan dengan UI

const initialState = {
    errors: null
};

// eslint-disable-next-line import/no-anonymous-default-export
export default function ( state=initialState, action ) {
    switch(action.type){
        case SET_ERRORS:
            return{
                ...state,
                errors: action.payload
            }
        case CLEAR_ERRORS:
            return{
                ...state,
                errors: null
            }
        default:
            return state
    }
}