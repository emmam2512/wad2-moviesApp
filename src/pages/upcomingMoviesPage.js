import React, { useContext } from "react";
import PageTemplate from '../components/templateMovieListPage'
import {UpcomingMoviesContext} from '../contexts/upcomingMoviesContext'
import AddToWatchList from '../components/buttons/addToWatchList'

const MovieListPage = () => {
  const context = useContext(UpcomingMoviesContext);
  const movies = context.movies.filter((m) => {

    return !("favorite" in m);
  });

  return (
    <PageTemplate
      title="No. Movies"
      movies={movies}  /* Changed */
      action={(movie) => {
        return <AddToWatchList movie={movie} />;
      }}
    />
  );
};

export default MovieListPage;