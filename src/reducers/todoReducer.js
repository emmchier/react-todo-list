import { actionTypes } from "../utils/types";

export const todoReducer = ( state = [], action ) => {

    switch ( action.type ) {
        case actionTypes.addAction:
            return [ ...state, action.payload ];    
        case actionTypes.deleteAction:
            return state.filter( task => task.id !== action.payload );
        case actionTypes.checkedAction:
            return state.map( task => 
                ( task.id === action.payload )
                ? { ...task, done: !task.done }
                : task
            )
        default:
            return state;
    }
    
}
