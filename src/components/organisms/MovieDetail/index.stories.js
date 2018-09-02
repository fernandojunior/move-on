import React from 'react'
import { storiesOf } from '@storybook/react'
import MovieDetail from '.'

storiesOf('MovieDetail', module)
  .add('default', () => (
    <MovieDetail />
  ))
