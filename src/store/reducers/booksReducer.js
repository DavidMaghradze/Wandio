import { FETCH_BOOKS, FETCH_BOOK, ADD_TO_FAVORITES, REMOVE_FROM_FAVORITES } from '../types';

const INITIAL_STATE = {
    allBooks: [],
    currentBook: null,
    favoriteBooks: {}
}

export default ( state = INITIAL_STATE, action ) => {
    switch(action.type) {
        case FETCH_BOOKS :
            return {...state, allBooks: {...action.payload}}
        case FETCH_BOOK :
            return {...state, currentBook: action.payload}
        case ADD_TO_FAVORITES :
            let newState = {favoriteBooks: Object.assign({}, {[action.payload.id]: action.payload}, state.favoriteBooks)}
            return Object.assign({}, state, newState)
        case REMOVE_FROM_FAVORITES :
            let payload = action.payload;
            const { [payload]: value, ...updatedState } = state.favoriteBooks;
            return {...state, favoriteBooks: {...updatedState}}
        default :
            return state
    }
}