import React from 'react';
import { connect } from 'react-redux';

import { fetchBooks } from '../../store/actions';

import './books.css';

import BooksItem from './booksItem/booksItem';

class Books extends React.Component {

    componentDidMount() {
       this.props.fetchBooks();
    }

    render(){
        const { books } = this.props;

        return (
            <div className="books container">
                <h1 className="books-title">Top 10 Javascript Books of All Time</h1>
                <div className="books-grid">
                    { books && books.map(book=>
                        <BooksItem key={book.id} book={book}/>    
                    ) }
                </div>
            </div>
        )
    }
};

const mapStateToProps = (state) => {
    return {
        books: Object.values(state.books.allBooks)
    }
}

export default connect(mapStateToProps,{fetchBooks})(Books);