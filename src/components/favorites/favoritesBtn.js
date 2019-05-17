import React from 'react';
import { connect } from 'react-redux';
import { addToFavorites, removeFromFavorites } from '../../store/actions';

import './favorites.css';

class FavoritesBtn extends React.Component {

    state = { isFavorite: '', message: '' }

    componentDidMount() {
        const isFavorite = this.props.favorites.hasOwnProperty(this.props.book.id);
        if(isFavorite) {
            this.setState({ isFavorite: true, message: "Added to Favorites" })
        } else {
            this.setState({ isFavorite: false, message: "+ Add to Favorites" })
        }
    }

    onFavoritesBtnClick = () => {
        this.setState({ isFavorite: !this.state.isFavorite })
        if(this.state.isFavorite) {
            this.setState({ message: "+ Add to Favorites" })
            this.props.removeFromFavorites(this.props.book.id);
        } else {
            this.setState({ message: "Added to Favorites" })
            this.props.addToFavorites(this.props.book);
        }
    }

    render(){
        return (
            <span className={`favorites-btn ${this.state.isFavorite && 'favorite'}`} onClick={this.onFavoritesBtnClick}>
                {
                 !this.state.isFavorite ? <i className="far fa-heart"></i> : <i className="fas fa-heart"></i>
                }
                { this.state.message }
            </span>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        favorites: state.books.favoriteBooks
    }
}

export default connect(mapStateToProps,{addToFavorites, removeFromFavorites})(FavoritesBtn);