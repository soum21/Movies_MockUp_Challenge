import * as types from './actionTypes';
import localStates from './localStates';

export default function detailReducer(state = localStates, action) {
    switch (action.type) {
        case types.SET_DETAIL_DATA:
            return {
                ...state,
                ...action.detail,
                error: '',
            }
        case types.ERROR_DETAIL_DATA:
            return {
                ...state,
                movies: [],
                error: action.error,
            }
        case types.RESET_DETAIL:
            return {
                movies: [],
                error: "",
            }
        default: return state
    }
}