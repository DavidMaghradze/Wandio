import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'; 

import Navigation from './navigation/navigation';
import Books from './books/books';
import Favorites from './favorites/favorites';
import Details from './details/details';

const App = () => {
    return (
        <BrowserRouter>
            <Navigation/>
            <Switch>
                <Route path="/favorites" component={Favorites}/>
                <Route path="/:id" component={Details}/>
                <Route path="/" component={Books}/>
            </Switch>
        </BrowserRouter>
    )
}

export default App;