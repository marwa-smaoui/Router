import React from 'react';
import {Card, Button} from'react-bootstrap';
import {Link}from 'react-router-dom';
const MovieCard = ({movie}) => {
    return (
        <div className='col-md-4 mt-3'>
  
        <Card style={{ width: '18rem',marginTop:'30px'}}>
            <Card.Img variant="top" src={movie.posterURL} style={{height:'350px',}}/>
            <Card.Body>
                <Card.Title>{movie.title}</Card.Title>
                <Card.Text>
                    {movie.description}
                </Card.Text>
                <p className='gold'>{''.padStart(movie.rate,'★')}</p>
            </Card.Body>
            <Link to ={`/description/${movie.title}`}><Button variant="primary">Description</Button> </Link>
        </Card>
        
        </div>
    )
}

export default MovieCard
