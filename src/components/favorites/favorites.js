import React from 'react';
import { connect } from 'react-redux';

import BooksItem from '../books/booksItem/booksItem';

const Favorites = (props) => {
    return (
        <div className="books container">
            <div className="books-grid">
                {props.favorites.map(favorite=>
                    <BooksItem key={favorite.id} book={favorite}/>    
                )}
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        favorites: Object.values(state.books.favoriteBooks)
    }
}

export default connect(mapStateToProps)(Favorites);