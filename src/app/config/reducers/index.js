import * as types from './actionTypes';
import globalStates from './globalStates';

export default function globalReducer(state = globalStates, action) {
    switch (action.type) {
        case types.SET_HOMEDATE_SUCCESS:
            return {
                ...state,
                movies: [
                    ...state.movies,
                    ...action.movies
                ],
                error: '',
                sort_query: action.sort_query ? action.sort_query : state.sort_query,
                page: state.page + 1
            }
        case types.ERROR_HOMEDATA:
            return {
                ...state,
                movies: [],
                error: action.error,
                page: 1,
                sort_query: state.sort_query
            }
        case types.RESET_HOME:
            return {
                movies: [],
                error: "",
                page: 1,
                sort_query: state.sort_query
            }
        default: return state
    }
}
