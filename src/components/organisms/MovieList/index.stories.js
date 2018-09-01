import React from 'react'
import { storiesOf } from '@storybook/react'
import MovieList from '.'

storiesOf('MovieList', module)
  .add('default', () => (
    <MovieList />
  ))
