import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Jumbotron from 'react-bootstrap/Jumbotron';
import BestBooks from './components/BestBooks';
import './myFavoriteBooks.css';

class MyFavoriteBooks extends React.Component {
  render() {
    return (
      <Jumbotron>
        <h1>My Favorite Books</h1>
        <BestBooks />
      </Jumbotron>
    );
  }
}

export default MyFavoriteBooks;
