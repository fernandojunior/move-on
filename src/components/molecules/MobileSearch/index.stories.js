import React from 'react'
import { BrowserView } from 'react-device-detect'
import { storiesOf } from '@storybook/react'
import StoryRouter from 'storybook-react-router'
import MobileSearch from '.'

storiesOf('MobileSearch', module)
  .addDecorator(StoryRouter())
  .add('MobileSearch', () => (
    <div>
      <BrowserView>See it on mobile screen size.</BrowserView>
      <MobileSearch />
    </div>
  ))
