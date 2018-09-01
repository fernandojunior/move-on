import React, { Component } from 'react'
import { Grid, Row, Col } from 'react-bootstrap'
import { isMobile } from 'react-device-detect'
import MoviePoster from '../../molecules/MoviePoster'

const _mock_props = { // eslint-disable-line
  movies: [
    JSON.parse('{"Title":"Blade Runner","Year":"1982","Rated":"R","Released":"25 Jun 1982","Runtime":"117 min","Genre":"Sci-Fi, Thriller","Director":"Ridley Scott","Writer":"Hampton Fancher (screenplay), David Webb Peoples (screenplay), Philip K. Dick (novel)","Actors":"Harrison Ford, Rutger Hauer, Sean Young, Edward James Olmos","Plot":"A blade runner must pursue and terminate four replicants who stole a ship in space, and have returned to Earth to find their creator.","Language":"English, German, Cantonese, Japanese, Hungarian, Arabic","Country":"USA, Hong Kong","Awards":"Nominated for 2 Oscars. Another 11 wins & 16 nominations.","Poster":"https://m.media-amazon.com/images/M/MV5BNzQzMzJhZTEtOWM4NS00MTdhLTg0YjgtMjM4MDRkZjUwZDBlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"8.2/10"},{"Source":"Rotten Tomatoes","Value":"90%"},{"Source":"Metacritic","Value":"89/100"}],"Metascore":"89","imdbRating":"8.2","imdbVotes":"594,601","imdbID":"tt0083658","Type":"movie","DVD":"27 Aug 1997","BoxOffice":"N/A","Production":"Warner Bros. Pictures","Website":"N/A","Response":"True"}'),
    JSON.parse('{"Title":"The Avengers","Year":"2012","Rated":"PG-13","Released":"04 May 2012","Runtime":"143 min","Genre":"Action, Adventure, Sci-Fi","Director":"Joss Whedon","Writer":"Joss Whedon (screenplay), Zak Penn (story), Joss Whedon (story)","Actors":"Robert Downey Jr., Chris Evans, Scarlett Johansson, Chris Hemsworth","Plot":"Earth\'s mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity.","Language":"English, Russian, Hindi","Country":"USA","Awards":"Nominated for 1 Oscar. Another 38 wins & 79 nominations.","Poster":"https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"8.1/10"},{"Source":"Rotten Tomatoes","Value":"92%"},{"Source":"Metacritic","Value":"69/100"}],"Metascore":"69","imdbRating":"8.1","imdbVotes":"1,116,889","imdbID":"tt0848228","Type":"movie","DVD":"25 Sep 2012","BoxOffice":"£623,279,547","Production":"Walt Disney Pictures","Website":"http://marvel.com/avengers_movie","Response":"True"}'),
    JSON.parse('{"Title":"The Avengers","Year":"2012","Rated":"PG-13","Released":"04 May 2012","Runtime":"143 min","Genre":"Action, Adventure, Sci-Fi","Director":"Joss Whedon","Writer":"Joss Whedon (screenplay), Zak Penn (story), Joss Whedon (story)","Actors":"Robert Downey Jr., Chris Evans, Scarlett Johansson, Chris Hemsworth","Plot":"Earth\'s mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity.","Language":"English, Russian, Hindi","Country":"USA","Awards":"Nominated for 1 Oscar. Another 38 wins & 79 nominations.","Poster":"https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"8.1/10"},{"Source":"Rotten Tomatoes","Value":"92%"},{"Source":"Metacritic","Value":"69/100"}],"Metascore":"69","imdbRating":"8.1","imdbVotes":"1,116,889","imdbID":"tt0848228","Type":"movie","DVD":"25 Sep 2012","BoxOffice":"£623,279,547","Production":"Walt Disney Pictures","Website":"http://marvel.com/avengers_movie","Response":"True"}'),
    JSON.parse('{"Title":"Harry Potter and the Deathly Hallows: Part 2","Year":"2011","Rated":"PG-13","Released":"15 Jul 2011","Runtime":"130 min","Genre":"Adventure, Drama, Fantasy","Director":"David Yates","Writer":"Steve Kloves (screenplay), J.K. Rowling (novel)","Actors":"Ralph Fiennes, Michael Gambon, Alan Rickman, Daniel Radcliffe","Plot":"Harry, Ron, and Hermione search for Voldemort\'s remaining Horcruxes in their effort to destroy the Dark Lord as the final battle rages on at Hogwarts.","Language":"English","Country":"USA, UK","Awards":"Nominated for 3 Oscars. Another 45 wins & 91 nominations.","Poster":"https://m.media-amazon.com/images/M/MV5BMjIyZGU4YzUtNDkzYi00ZDRhLTljYzctYTMxMDQ4M2E0Y2YxXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"8.1/10"},{"Source":"Rotten Tomatoes","Value":"96%"},{"Source":"Metacritic","Value":"87/100"}],"Metascore":"87","imdbRating":"8.1","imdbVotes":"654,923","imdbID":"tt1201607","Type":"movie","DVD":"11 Nov 2011","BoxOffice":"£381,000,185","Production":"Warner Bros. Pictures","Website":"http://www.HarryPotter.com/","Response":"True"}'),
    JSON.parse('{"Title":"Blade Runner","Year":"1982","Rated":"R","Released":"25 Jun 1982","Runtime":"117 min","Genre":"Sci-Fi, Thriller","Director":"Ridley Scott","Writer":"Hampton Fancher (screenplay), David Webb Peoples (screenplay), Philip K. Dick (novel)","Actors":"Harrison Ford, Rutger Hauer, Sean Young, Edward James Olmos","Plot":"A blade runner must pursue and terminate four replicants who stole a ship in space, and have returned to Earth to find their creator.","Language":"English, German, Cantonese, Japanese, Hungarian, Arabic","Country":"USA, Hong Kong","Awards":"Nominated for 2 Oscars. Another 11 wins & 16 nominations.","Poster":"https://m.media-amazon.com/images/M/MV5BNzQzMzJhZTEtOWM4NS00MTdhLTg0YjgtMjM4MDRkZjUwZDBlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"8.2/10"},{"Source":"Rotten Tomatoes","Value":"90%"},{"Source":"Metacritic","Value":"89/100"}],"Metascore":"89","imdbRating":"8.2","imdbVotes":"594,601","imdbID":"tt0083658","Type":"movie","DVD":"27 Aug 1997","BoxOffice":"N/A","Production":"Warner Bros. Pictures","Website":"N/A","Response":"True"}'),
    JSON.parse('{"Title":"The Avengers","Year":"2012","Rated":"PG-13","Released":"04 May 2012","Runtime":"143 min","Genre":"Action, Adventure, Sci-Fi","Director":"Joss Whedon","Writer":"Joss Whedon (screenplay), Zak Penn (story), Joss Whedon (story)","Actors":"Robert Downey Jr., Chris Evans, Scarlett Johansson, Chris Hemsworth","Plot":"Earth\'s mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity.","Language":"English, Russian, Hindi","Country":"USA","Awards":"Nominated for 1 Oscar. Another 38 wins & 79 nominations.","Poster":"https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"8.1/10"},{"Source":"Rotten Tomatoes","Value":"92%"},{"Source":"Metacritic","Value":"69/100"}],"Metascore":"69","imdbRating":"8.1","imdbVotes":"1,116,889","imdbID":"tt0848228","Type":"movie","DVD":"25 Sep 2012","BoxOffice":"£623,279,547","Production":"Walt Disney Pictures","Website":"http://marvel.com/avengers_movie","Response":"True"}'),
    JSON.parse('{"Title":"The Avengers","Year":"2012","Rated":"PG-13","Released":"04 May 2012","Runtime":"143 min","Genre":"Action, Adventure, Sci-Fi","Director":"Joss Whedon","Writer":"Joss Whedon (screenplay), Zak Penn (story), Joss Whedon (story)","Actors":"Robert Downey Jr., Chris Evans, Scarlett Johansson, Chris Hemsworth","Plot":"Earth\'s mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity.","Language":"English, Russian, Hindi","Country":"USA","Awards":"Nominated for 1 Oscar. Another 38 wins & 79 nominations.","Poster":"https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"8.1/10"},{"Source":"Rotten Tomatoes","Value":"92%"},{"Source":"Metacritic","Value":"69/100"}],"Metascore":"69","imdbRating":"8.1","imdbVotes":"1,116,889","imdbID":"tt0848228","Type":"movie","DVD":"25 Sep 2012","BoxOffice":"£623,279,547","Production":"Walt Disney Pictures","Website":"http://marvel.com/avengers_movie","Response":"True"}'),
    JSON.parse('{"Title":"Harry Potter and the Deathly Hallows: Part 2","Year":"2011","Rated":"PG-13","Released":"15 Jul 2011","Runtime":"130 min","Genre":"Adventure, Drama, Fantasy","Director":"David Yates","Writer":"Steve Kloves (screenplay), J.K. Rowling (novel)","Actors":"Ralph Fiennes, Michael Gambon, Alan Rickman, Daniel Radcliffe","Plot":"Harry, Ron, and Hermione search for Voldemort\'s remaining Horcruxes in their effort to destroy the Dark Lord as the final battle rages on at Hogwarts.","Language":"English","Country":"USA, UK","Awards":"Nominated for 3 Oscars. Another 45 wins & 91 nominations.","Poster":"https://m.media-amazon.com/images/M/MV5BMjIyZGU4YzUtNDkzYi00ZDRhLTljYzctYTMxMDQ4M2E0Y2YxXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"8.1/10"},{"Source":"Rotten Tomatoes","Value":"96%"},{"Source":"Metacritic","Value":"87/100"}],"Metascore":"87","imdbRating":"8.1","imdbVotes":"654,923","imdbID":"tt1201607","Type":"movie","DVD":"11 Nov 2011","BoxOffice":"£381,000,185","Production":"Warner Bros. Pictures","Website":"http://www.HarryPotter.com/","Response":"True"}'),
    JSON.parse('{"Title":"The Avengers","Year":"2012","Rated":"PG-13","Released":"04 May 2012","Runtime":"143 min","Genre":"Action, Adventure, Sci-Fi","Director":"Joss Whedon","Writer":"Joss Whedon (screenplay), Zak Penn (story), Joss Whedon (story)","Actors":"Robert Downey Jr., Chris Evans, Scarlett Johansson, Chris Hemsworth","Plot":"Earth\'s mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity.","Language":"English, Russian, Hindi","Country":"USA","Awards":"Nominated for 1 Oscar. Another 38 wins & 79 nominations.","Poster":"https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"8.1/10"},{"Source":"Rotten Tomatoes","Value":"92%"},{"Source":"Metacritic","Value":"69/100"}],"Metascore":"69","imdbRating":"8.1","imdbVotes":"1,116,889","imdbID":"tt0848228","Type":"movie","DVD":"25 Sep 2012","BoxOffice":"£623,279,547","Production":"Walt Disney Pictures","Website":"http://marvel.com/avengers_movie","Response":"True"}'),
    JSON.parse('{"Title":"The Avengers","Year":"2012","Rated":"PG-13","Released":"04 May 2012","Runtime":"143 min","Genre":"Action, Adventure, Sci-Fi","Director":"Joss Whedon","Writer":"Joss Whedon (screenplay), Zak Penn (story), Joss Whedon (story)","Actors":"Robert Downey Jr., Chris Evans, Scarlett Johansson, Chris Hemsworth","Plot":"Earth\'s mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity.","Language":"English, Russian, Hindi","Country":"USA","Awards":"Nominated for 1 Oscar. Another 38 wins & 79 nominations.","Poster":"https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"8.1/10"},{"Source":"Rotten Tomatoes","Value":"92%"},{"Source":"Metacritic","Value":"69/100"}],"Metascore":"69","imdbRating":"8.1","imdbVotes":"1,116,889","imdbID":"tt0848228","Type":"movie","DVD":"25 Sep 2012","BoxOffice":"£623,279,547","Production":"Walt Disney Pictures","Website":"http://marvel.com/avengers_movie","Response":"True"}'),
    JSON.parse('{"Title":"Harry Potter and the Deathly Hallows: Part 2","Year":"2011","Rated":"PG-13","Released":"15 Jul 2011","Runtime":"130 min","Genre":"Adventure, Drama, Fantasy","Director":"David Yates","Writer":"Steve Kloves (screenplay), J.K. Rowling (novel)","Actors":"Ralph Fiennes, Michael Gambon, Alan Rickman, Daniel Radcliffe","Plot":"Harry, Ron, and Hermione search for Voldemort\'s remaining Horcruxes in their effort to destroy the Dark Lord as the final battle rages on at Hogwarts.","Language":"English","Country":"USA, UK","Awards":"Nominated for 3 Oscars. Another 45 wins & 91 nominations.","Poster":"https://m.media-amazon.com/images/M/MV5BMjIyZGU4YzUtNDkzYi00ZDRhLTljYzctYTMxMDQ4M2E0Y2YxXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"8.1/10"},{"Source":"Rotten Tomatoes","Value":"96%"},{"Source":"Metacritic","Value":"87/100"}],"Metascore":"87","imdbRating":"8.1","imdbVotes":"654,923","imdbID":"tt1201607","Type":"movie","DVD":"11 Nov 2011","BoxOffice":"£381,000,185","Production":"Warner Bros. Pictures","Website":"http://www.HarryPotter.com/","Response":"True"}'),
    JSON.parse('{"Title":"The Avengers","Year":"2012","Rated":"PG-13","Released":"04 May 2012","Runtime":"143 min","Genre":"Action, Adventure, Sci-Fi","Director":"Joss Whedon","Writer":"Joss Whedon (screenplay), Zak Penn (story), Joss Whedon (story)","Actors":"Robert Downey Jr., Chris Evans, Scarlett Johansson, Chris Hemsworth","Plot":"Earth\'s mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity.","Language":"English, Russian, Hindi","Country":"USA","Awards":"Nominated for 1 Oscar. Another 38 wins & 79 nominations.","Poster":"https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"8.1/10"},{"Source":"Rotten Tomatoes","Value":"92%"},{"Source":"Metacritic","Value":"69/100"}],"Metascore":"69","imdbRating":"8.1","imdbVotes":"1,116,889","imdbID":"tt0848228","Type":"movie","DVD":"25 Sep 2012","BoxOffice":"£623,279,547","Production":"Walt Disney Pictures","Website":"http://marvel.com/avengers_movie","Response":"True"}'),
    JSON.parse('{"Title":"The Avengers","Year":"2012","Rated":"PG-13","Released":"04 May 2012","Runtime":"143 min","Genre":"Action, Adventure, Sci-Fi","Director":"Joss Whedon","Writer":"Joss Whedon (screenplay), Zak Penn (story), Joss Whedon (story)","Actors":"Robert Downey Jr., Chris Evans, Scarlett Johansson, Chris Hemsworth","Plot":"Earth\'s mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity.","Language":"English, Russian, Hindi","Country":"USA","Awards":"Nominated for 1 Oscar. Another 38 wins & 79 nominations.","Poster":"https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"8.1/10"},{"Source":"Rotten Tomatoes","Value":"92%"},{"Source":"Metacritic","Value":"69/100"}],"Metascore":"69","imdbRating":"8.1","imdbVotes":"1,116,889","imdbID":"tt0848228","Type":"movie","DVD":"25 Sep 2012","BoxOffice":"£623,279,547","Production":"Walt Disney Pictures","Website":"http://marvel.com/avengers_movie","Response":"True"}'),
    JSON.parse('{"Title":"Harry Potter and the Deathly Hallows: Part 2","Year":"2011","Rated":"PG-13","Released":"15 Jul 2011","Runtime":"130 min","Genre":"Adventure, Drama, Fantasy","Director":"David Yates","Writer":"Steve Kloves (screenplay), J.K. Rowling (novel)","Actors":"Ralph Fiennes, Michael Gambon, Alan Rickman, Daniel Radcliffe","Plot":"Harry, Ron, and Hermione search for Voldemort\'s remaining Horcruxes in their effort to destroy the Dark Lord as the final battle rages on at Hogwarts.","Language":"English","Country":"USA, UK","Awards":"Nominated for 3 Oscars. Another 45 wins & 91 nominations.","Poster":"https://m.media-amazon.com/images/M/MV5BMjIyZGU4YzUtNDkzYi00ZDRhLTljYzctYTMxMDQ4M2E0Y2YxXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"8.1/10"},{"Source":"Rotten Tomatoes","Value":"96%"},{"Source":"Metacritic","Value":"87/100"}],"Metascore":"87","imdbRating":"8.1","imdbVotes":"654,923","imdbID":"tt1201607","Type":"movie","DVD":"11 Nov 2011","BoxOffice":"£381,000,185","Production":"Warner Bros. Pictures","Website":"http://www.HarryPotter.com/","Response":"True"}'),
    JSON.parse('{"Title":"Blade Runner","Year":"1982","Rated":"R","Released":"25 Jun 1982","Runtime":"117 min","Genre":"Sci-Fi, Thriller","Director":"Ridley Scott","Writer":"Hampton Fancher (screenplay), David Webb Peoples (screenplay), Philip K. Dick (novel)","Actors":"Harrison Ford, Rutger Hauer, Sean Young, Edward James Olmos","Plot":"A blade runner must pursue and terminate four replicants who stole a ship in space, and have returned to Earth to find their creator.","Language":"English, German, Cantonese, Japanese, Hungarian, Arabic","Country":"USA, Hong Kong","Awards":"Nominated for 2 Oscars. Another 11 wins & 16 nominations.","Poster":"https://m.media-amazon.com/images/M/MV5BNzQzMzJhZTEtOWM4NS00MTdhLTg0YjgtMjM4MDRkZjUwZDBlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"8.2/10"},{"Source":"Rotten Tomatoes","Value":"90%"},{"Source":"Metacritic","Value":"89/100"}],"Metascore":"89","imdbRating":"8.2","imdbVotes":"594,601","imdbID":"tt0083658","Type":"movie","DVD":"27 Aug 1997","BoxOffice":"N/A","Production":"Warner Bros. Pictures","Website":"N/A","Response":"True"}'),
    JSON.parse('{"Title":"The Avengers","Year":"2012","Rated":"PG-13","Released":"04 May 2012","Runtime":"143 min","Genre":"Action, Adventure, Sci-Fi","Director":"Joss Whedon","Writer":"Joss Whedon (screenplay), Zak Penn (story), Joss Whedon (story)","Actors":"Robert Downey Jr., Chris Evans, Scarlett Johansson, Chris Hemsworth","Plot":"Earth\'s mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity.","Language":"English, Russian, Hindi","Country":"USA","Awards":"Nominated for 1 Oscar. Another 38 wins & 79 nominations.","Poster":"https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"8.1/10"},{"Source":"Rotten Tomatoes","Value":"92%"},{"Source":"Metacritic","Value":"69/100"}],"Metascore":"69","imdbRating":"8.1","imdbVotes":"1,116,889","imdbID":"tt0848228","Type":"movie","DVD":"25 Sep 2012","BoxOffice":"£623,279,547","Production":"Walt Disney Pictures","Website":"http://marvel.com/avengers_movie","Response":"True"}'),
    JSON.parse('{"Title":"The Avengers","Year":"2012","Rated":"PG-13","Released":"04 May 2012","Runtime":"143 min","Genre":"Action, Adventure, Sci-Fi","Director":"Joss Whedon","Writer":"Joss Whedon (screenplay), Zak Penn (story), Joss Whedon (story)","Actors":"Robert Downey Jr., Chris Evans, Scarlett Johansson, Chris Hemsworth","Plot":"Earth\'s mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity.","Language":"English, Russian, Hindi","Country":"USA","Awards":"Nominated for 1 Oscar. Another 38 wins & 79 nominations.","Poster":"https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"8.1/10"},{"Source":"Rotten Tomatoes","Value":"92%"},{"Source":"Metacritic","Value":"69/100"}],"Metascore":"69","imdbRating":"8.1","imdbVotes":"1,116,889","imdbID":"tt0848228","Type":"movie","DVD":"25 Sep 2012","BoxOffice":"£623,279,547","Production":"Walt Disney Pictures","Website":"http://marvel.com/avengers_movie","Response":"True"}'),
    JSON.parse('{"Title":"Harry Potter and the Deathly Hallows: Part 2","Year":"2011","Rated":"PG-13","Released":"15 Jul 2011","Runtime":"130 min","Genre":"Adventure, Drama, Fantasy","Director":"David Yates","Writer":"Steve Kloves (screenplay), J.K. Rowling (novel)","Actors":"Ralph Fiennes, Michael Gambon, Alan Rickman, Daniel Radcliffe","Plot":"Harry, Ron, and Hermione search for Voldemort\'s remaining Horcruxes in their effort to destroy the Dark Lord as the final battle rages on at Hogwarts.","Language":"English","Country":"USA, UK","Awards":"Nominated for 3 Oscars. Another 45 wins & 91 nominations.","Poster":"https://m.media-amazon.com/images/M/MV5BMjIyZGU4YzUtNDkzYi00ZDRhLTljYzctYTMxMDQ4M2E0Y2YxXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"8.1/10"},{"Source":"Rotten Tomatoes","Value":"96%"},{"Source":"Metacritic","Value":"87/100"}],"Metascore":"87","imdbRating":"8.1","imdbVotes":"654,923","imdbID":"tt1201607","Type":"movie","DVD":"11 Nov 2011","BoxOffice":"£381,000,185","Production":"Warner Bros. Pictures","Website":"http://www.HarryPotter.com/","Response":"True"}'),
    JSON.parse('{"Title":"The Avengers","Year":"2012","Rated":"PG-13","Released":"04 May 2012","Runtime":"143 min","Genre":"Action, Adventure, Sci-Fi","Director":"Joss Whedon","Writer":"Joss Whedon (screenplay), Zak Penn (story), Joss Whedon (story)","Actors":"Robert Downey Jr., Chris Evans, Scarlett Johansson, Chris Hemsworth","Plot":"Earth\'s mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity.","Language":"English, Russian, Hindi","Country":"USA","Awards":"Nominated for 1 Oscar. Another 38 wins & 79 nominations.","Poster":"https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"8.1/10"},{"Source":"Rotten Tomatoes","Value":"92%"},{"Source":"Metacritic","Value":"69/100"}],"Metascore":"69","imdbRating":"8.1","imdbVotes":"1,116,889","imdbID":"tt0848228","Type":"movie","DVD":"25 Sep 2012","BoxOffice":"£623,279,547","Production":"Walt Disney Pictures","Website":"http://marvel.com/avengers_movie","Response":"True"}'),
    JSON.parse('{"Title":"The Avengers","Year":"2012","Rated":"PG-13","Released":"04 May 2012","Runtime":"143 min","Genre":"Action, Adventure, Sci-Fi","Director":"Joss Whedon","Writer":"Joss Whedon (screenplay), Zak Penn (story), Joss Whedon (story)","Actors":"Robert Downey Jr., Chris Evans, Scarlett Johansson, Chris Hemsworth","Plot":"Earth\'s mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity.","Language":"English, Russian, Hindi","Country":"USA","Awards":"Nominated for 1 Oscar. Another 38 wins & 79 nominations.","Poster":"https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"8.1/10"},{"Source":"Rotten Tomatoes","Value":"92%"},{"Source":"Metacritic","Value":"69/100"}],"Metascore":"69","imdbRating":"8.1","imdbVotes":"1,116,889","imdbID":"tt0848228","Type":"movie","DVD":"25 Sep 2012","BoxOffice":"£623,279,547","Production":"Walt Disney Pictures","Website":"http://marvel.com/avengers_movie","Response":"True"}'),
    JSON.parse('{"Title":"Harry Potter and the Deathly Hallows: Part 2","Year":"2011","Rated":"PG-13","Released":"15 Jul 2011","Runtime":"130 min","Genre":"Adventure, Drama, Fantasy","Director":"David Yates","Writer":"Steve Kloves (screenplay), J.K. Rowling (novel)","Actors":"Ralph Fiennes, Michael Gambon, Alan Rickman, Daniel Radcliffe","Plot":"Harry, Ron, and Hermione search for Voldemort\'s remaining Horcruxes in their effort to destroy the Dark Lord as the final battle rages on at Hogwarts.","Language":"English","Country":"USA, UK","Awards":"Nominated for 3 Oscars. Another 45 wins & 91 nominations.","Poster":"https://m.media-amazon.com/images/M/MV5BMjIyZGU4YzUtNDkzYi00ZDRhLTljYzctYTMxMDQ4M2E0Y2YxXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"8.1/10"},{"Source":"Rotten Tomatoes","Value":"96%"},{"Source":"Metacritic","Value":"87/100"}],"Metascore":"87","imdbRating":"8.1","imdbVotes":"654,923","imdbID":"tt1201607","Type":"movie","DVD":"11 Nov 2011","BoxOffice":"£381,000,185","Production":"Warner Bros. Pictures","Website":"http://www.HarryPotter.com/","Response":"True"}')
  ]
}

export default class MovieList extends Component{ // eslint-disable-line

  render() {
    const colProps = isMobile ? { xs: 4 } : { sm: 2, md: 2, lg: 2 }

    const movies = _mock_props.movies.map(({ imdbID, Poster, Title, Year }) => (
      <Col {...colProps} key={Math.floor(Math.random() * 255)}>
        <a href="#"><MoviePoster id={imdbID} url={Poster} title={Title} year={Year} responsive /></a>
      </Col>
    ))

    return (
      <Grid fluid={false}>
        <Row style={{ display: 'flex', flexWrap: 'wrap' }}>
          {movies}
        </Row>
      </Grid>
    )
  }
}
