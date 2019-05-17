import { FETCH_BOOKS, FETCH_BOOK, ADD_TO_FAVORITES, REMOVE_FROM_FAVORITES} from '../types';
import axios from 'axios';

export const fetchBooks = () => {
    return async (dispatch) => {
        const response = await axios.get('https://www.googleapis.com/books/v1/volumes?q=javascript');
        dispatch({ type: FETCH_BOOKS, payload: response.data.items })
    }
}

export const fetchBook = (id) => {
    return async (dispatch) => {
        const response = await axios.get(`https://www.googleapis.com/books/v1/volumes/${id}`);
        dispatch({ type: FETCH_BOOK, payload: response.data })
    }
}

export const addToFavorites = (book) => {
    return {
        type: ADD_TO_FAVORITES,
        payload: book
    }
}

export const removeFromFavorites = (id) => {
    return {
        type: REMOVE_FROM_FAVORITES,
        payload: id
    }
}