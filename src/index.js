import React from "react";
import ReactDOM from "react-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import { BrowserRouter, Route, Redirect, Switch, Link } from "react-router-dom"    // CHANGED
import FavoritesMoviesPage from './pages/favoritesMoviesPage'       // NEW
import HomePage from "./pages/homePage";
import MoviePage from './pages/movieDetailsPage'
import MovieReviewPage from "./pages/movieReviewPage";
import UpcomingMoviePage from "./pages/upcomingMoviesPage";
import SiteHeader from './components/siteHeader'
import MoviesContextProvider from "./contexts/moviesContext";
import GenresContextProvider from "./contexts/genresContext";
import AddMovieReviewPage from './pages/addMovieReviewPage'
import TopRatedMoviesPage from './pages/topRatedMoviesPage'
import movieCredits from "./components/movieCredits";



const App = () => {
  return (
      <BrowserRouter>
        <div className="jumbotron">
          <SiteHeader />      {/* New Header  */}
          <div className="container-fluid">
             <MoviesContextProvider> 
             <GenresContextProvider>
            <Switch>
                     <Route exact path="/movies/toprated" component={TopRatedMoviesPage} />
                     <Route exact path="/reviews/form" component={AddMovieReviewPage} />
                     <Route exact path="/movies/upcoming" component={UpcomingMoviePage} />
                     <Route path="/reviews/:id" component={MovieReviewPage} />
                     <Route exact path="/movies/favorites" component={FavoritesMoviesPage} />
                     <Route path="/movies/:id" component={MoviePage} />
                     <Route path="/" component={HomePage} />
                  <Redirect from="*" to="/" />
                </Switch>
                </GenresContextProvider>
              </MoviesContextProvider> 
             </div>
            </div>
           </BrowserRouter>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));