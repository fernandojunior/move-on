import React from 'react'
import { storiesOf } from '@storybook/react'
import UserAvatar from '.'

storiesOf('UserAvatar', module)
  .add('UserAvatar showName', () => (
    <UserAvatar showName />
  ))
  .add('UserAvatar', () => (
    <UserAvatar />
  ))
