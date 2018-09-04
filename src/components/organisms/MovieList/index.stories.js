import React from 'react'
import { storiesOf } from '@storybook/react'
import StoryRouter from 'storybook-react-router'
import MovieList from '.'

storiesOf('MovieList', module)
  .addDecorator(StoryRouter())
  .add('default', () => (
    <MovieList />
  ))
