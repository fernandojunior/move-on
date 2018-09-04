import React from 'react'
import { storiesOf } from '@storybook/react'
import StoryRouter from 'storybook-react-router'
import HomePage from '.'

storiesOf('HomePage', module)
  .addDecorator(StoryRouter())
  .add('default', () => (
    <HomePage />
  ))
