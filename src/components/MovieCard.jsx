import React from 'react';
import { Card, Button, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

function MovieCard({ movies }) {
  return (
    <div style={{ margin: '20px' }}>
      <Row xs={1} md={2} className="g-4">
        {movies.map((movie) => (
          <div
            key={movie.id}
            style={{
              display: 'flex',
              width: '200%',
            }}
          >
            <Card style={{ width: '20rem', margin: '10px', height: '40rem' }}>
              <Card.Img
                variant="top"
                src={movie.Img}
                style={{ height: '20rem' }}
              />
              <Card.Body>
                <h5>
                  <strong>{movie.title}</strong>
                </h5>
                <h6>
                  <strong>{movie.runtime}</strong>
                </h6>
                <Card.Text>
                  <div style={{ fontSize: '15px' }}>
                    <p>
                    <strong>Production Time: {movie.productionTime}</strong>
                    </p>
                    <p>
                      <strong>Price: {movie.price} Ksh</strong>
                    </p>
                  </div>
                </Card.Text>
                <NavLink to="/userform">
                  <Button
                    variant="success"
                    style={{
                      marginBottom: '10px',
                      fontSize: '15px',
                      backgroundColor: '#1a4301',
                    }}
                  >
                    Book Now!
                  </Button>
                </NavLink>
              </Card.Body>
            </Card>
          </div>
        ))}
      </Row>
    </div>
  );
}

export default MovieCard;
