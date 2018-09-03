import React from 'react'
import { storiesOf } from '@storybook/react'
import Icon from '.'

storiesOf('atoms/Icon', module)
  .add('Icon star-hollow', () => (
    <Icon icon="star-hollow" height="24px" />
  ))
  .add('Icon star-filled', () => (
    <Icon icon="star-filled" height="24px" />
  ))
  .add('Icon close', () => (
    <Icon icon="close" height="24px" />
  ))
  .add('Icon search', () => (
    <Icon icon="search" height="24px" />
  ))
