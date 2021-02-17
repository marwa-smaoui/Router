import React from "react";
import { Link } from "react-router-dom";
import {Button} from 'react-bootstrap'
const Description = (props) => {
  return (
    <div className="conatiner-fluid">
      <div className="row">
        {props.movielist
          .filter((el) => el.title === props.match.params.title)
          .map((el) => (
            <iframe
              width="676"
              height="381"
              src={el.trailer}
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          ))}

        <Link to={`/`}>
          {" "}
          <Button variant="primary">Back to movies</Button>
        </Link>
      </div>
    </div>
  );
};

export default Description;
