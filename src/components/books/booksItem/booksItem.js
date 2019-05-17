import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { addToFavorites, removeFromFavorites } from '../../../store/actions';

import './booksItem.css';

import FavoritesBtn from '../../favorites/favoritesBtn';

const BooksItem = ({book}) => {
        const details = book.volumeInfo;

        return (
            <section className="book">
                <figure className="book-thumbnail">
                    <img src={details.imageLinks.thumbnail}/>
                </figure>
                <section className="book-content">
                    <h1 className="book-title">{details.title}</h1>
                    <article className="book-desc">{details.description.slice(0,250)}...</article>
                    <footer className="book-footer">
                        <FavoritesBtn book={book}/>
                        <NavLink to={`/${book.id}`}>Read More</NavLink>
                    </footer>
                </section>
            </section>
        )
    
}

export default BooksItem;