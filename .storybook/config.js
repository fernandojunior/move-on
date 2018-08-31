import { configure } from '@storybook/react'

// const req = require.context('components', true, /.stories.js$/)

function loadStories() {
  // req.keys().forEach(filename => req(filename))
  require('../src/components/App/index.stories.js')
}

configure(loadStories, module);