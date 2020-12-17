# Assignment 1 - ReactJS app.

Name: Emma Murphy
## Features.

...... A bullet-point list of the ADDITIONAL user features you have implemented for the  Movies Fan app ......,
 
 + Feature 1 - added a simlar movies
 + Feature 2 - added top rated movies
 + Feature 3 = added credits


## Setup requirements (If required).

npm install
npm start

## API Data Model.

..... List the additional TMDB endpoints used in your assignment, e.g.

+ https://api.themoviedb.org/3/movie/${id} - get detailed information on a specific movie. 
+ https://api.themoviedb.org/3/genre/movie/list - get a list of movie genres
+ https://api.themoviedb.org/3/movie/${id}/similar?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1 - gets similar movies
+ https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1 - gets top rated movies
+ https://api.themoviedb.org/3/movie/${id}/credits?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US` - gets the movie credits
## App Design.

### Component catalogue (If required).

....... Insert a screenshot from the Storybook UI, hi-light stories relating to new/modified components you developed - see example screenshot below] .......

![][stories]

### UI Design.

...... Insert screenshots of the new/modified views you have added to the Movies Fan app. Include a caption for each one clearly stating its purpose and any user interaction it supports ........

![][similarMovies]
>Shows similar movies to the movie selected
![Image of similarmovies](https://github.com/emmam2512/images/blob/main/Screenshot%20(298).png)
![Image of toprated](https://github.com/emmam2512/images/blob/main/toprated.png.png)
>Shows a full list of top rated movies

![movieCredits](https://github.com/emmam2512/images/blob/main/Screenshot%20(297).png)
>displays the cast character name and star rating of a movie selected.



## Routing.

...... Insert a list of the additional routes supported by your Movies Fan app. If relevant, specify which of the routes require authentication, i.e. protected/private.

+ /movies/favorites (protected) - displays the user's favorite movies selection.
+ /reviews/:id (public) - displays the full text of a movie review.
+ /movies/toprated  - displays top rated movies.



### Data hyperlinking.

.... Use screenshots to illustrate where data hyperlinking is present in your views - include captions.

![][topratedcardLink](https://github.com/emmam2512/images/blob/main/Screenshot%20(299).png)
> Clicking a card causes the display of that movie's details.

![][creditsLink](https://github.com/emmam2512/images/blob/main/Screenshot%20(301).png)
>Clicking the 'show credits' for a review extract will display cast, character name and star rating.
![][similarMovieslink](https://github.com/emmam2512/images/blob/main/Screenshot%20(302).png) (https://github.com/emmam2512/images/blob/main/Screenshot%20(303).png)
> Clicking a similar movie card brings up the information on that movie and then new similar movies are displayed (two screenshots)

## Independent learning (If relevant).

. . . . . Briefly mention each technologies/techniques used in your project codebase that were not covered in the lectures/labs. Provide source code filename references to support your assertions and include reference material links (articles/blogs).

