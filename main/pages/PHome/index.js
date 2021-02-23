import React from 'react'
import { observer } from 'startupjs'
import './index.styl'
import { Div } from '@startupjs/ui'
import Notes from './Notes'
import Options from './Options'
import Navbar from './Navbar'
import Suggestion from './Suggestion'

export default observer(function PHome () {
  return pug`
    Div.root
      Navbar
      Div.content
        Suggestion
        Options
        Notes
  `
})
