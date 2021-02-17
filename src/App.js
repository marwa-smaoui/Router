import React, { useState } from "react";
import "./App.css";
import MovieList from "./Components/MovieList";
import AddMovie from "./Components/AddMovie";
import { movieslist } from "./Assets/Data";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Description from "./Components/Description";
function App() {
  const [movielist, setMovielist] = useState(movieslist);
  const addMovie = (title, posterURL, description, rate) => {
    setMovielist([
      ...movielist,
      {
        title: title,
        posterURL: posterURL,
        description: description,
        rate: rate,
      },
    ]);
  };
  return (
    <BrowserRouter>
      <div className="container-fluid">
        <Switch>
          <Route exact path="/description/:title" render={(props)=><Description movielist={movielist} {...props} />} />
          <Route
            exact
            path="/"
            render={(props) => <MovieList movielist={movielist} {...props} />}
          />
          <Route
            exact
            path="/"
            render={(props) => <AddMovie addMovie={addMovie} {...props} />}
          />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
