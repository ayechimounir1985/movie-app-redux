import React from 'react'
import { Card, Col } from 'react-bootstrap'
import { useSelector } from 'react-redux'

const Movie = () => {
    const movie = useSelector(state => state.MovieReducer.movies)
  return (
    <div>
       {movie.map(movie=>(
         <Col>
          <Card>
            <Card.Img variant="top" style={{width:'16rem',height:'100px'}} src={movie.posterURL} />
            <Card.Body>
              <Card.Title>{movie.Title}</Card.Title>
              <Card.Text>
              {movie.description}
              </Card.Text>
              {/* <Rating name="read-only" value={movie.rating} readOnly max={10} /> */}
            </Card.Body>
          </Card>
        </Col>
        ))} 
      
    </div>
    )}

export default Movie
