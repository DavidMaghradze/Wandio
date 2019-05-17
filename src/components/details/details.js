import React from 'react';
import { connect } from 'react-redux';
import { fetchBook } from '../../store/actions';

import './details.css';
import FavoritesBtn from '../favorites/favoritesBtn';

class Details extends React.Component {

    componentDidMount() {
        const bookId = this.props.location.pathname.substr(1);
        this.props.fetchBook(bookId);
    }

    render(){
        let details;
        if(this.props.book) {
            details = this.props.book.volumeInfo;
        }

        return (
            <div className="details container">
               { details && this.props.book.id===this.props.location.pathname.substr(1) &&
                <section className="details-box">
                    <figure className="details-image">
                        <img src={details.imageLinks.thumbnail}/>
                        <FavoritesBtn book={this.props.book}/>
                    </figure>
                    <section className="details-content">
                        <header className="details-header">
                            <h1 className="details-title">{details.title}</h1>
                            <div className="details-release">
                                <span><strong>Author: </strong>{details.authors.map(author=>author)}</span>
                                <span><strong>Publisher: </strong>{details.publisher}</span>
                                <span><strong>Publish Date: </strong>{details.publishedDate}</span>
                            </div>
                        </header>
                        <article>
                            {details.description}
                        </article>
                    </section>
                </section> 
                }
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        book: state.books.currentBook
    }
}

export default connect(mapStateToProps, {fetchBook})(Details);
