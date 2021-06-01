import React from 'react';

import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
class BestBooks extends React.Component {
  render() {
    return this.props.books.map((item, index) => {
      return (
        <Card style={{ width: '18rem' }} key={index}>
          <Card.Img variant="top" src={item.image} />
          <Card.Body>
            <Card.Title>{item.bookName}</Card.Title>
            <Card.Text>{item.describtion}</Card.Text>
          </Card.Body>
        </Card>
      );
    });
  }
}
export default BestBooks;
