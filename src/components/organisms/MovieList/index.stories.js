import React from 'react'
import { storiesOf } from '@storybook/react'
import StoryRouter from 'storybook-react-router'
import { mockedMovies } from '../../../reducer/movies/service'
import MovieList from '.'

storiesOf('MovieList', module)
  .addDecorator(StoryRouter())
  .add('default', () => (
    <MovieList movies={mockedMovies} />
  ))
