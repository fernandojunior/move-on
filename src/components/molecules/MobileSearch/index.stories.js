import React from 'react'
import { BrowserView } from 'react-device-detect'
import { storiesOf } from '@storybook/react'
import MobileSearch from '.'

storiesOf('MobileSearch', module)
  .add('MobileSearch', () => (
    <div>
      <BrowserView>See it on mobile screen size.</BrowserView>
      <MobileSearch />
    </div>
  ))
