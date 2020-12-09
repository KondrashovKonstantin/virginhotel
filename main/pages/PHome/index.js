import React, { useState } from 'react'
import { observer } from 'startupjs'
import { Image } from 'react-native'
import './index.styl'
import { Div, Icon, Span, Row, Divider, TextInput, Button, Card } from '@startupjs/ui'
import { faChevronDown, faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import Notes from './Notes'
import Options from './Options'
import Navbar from './Navbar'
import Suggestion from './Suggestion'

export default observer(function PHome () {
  const [options, toggleOptions] = useState(false)
  return pug`
    Div.root
      Navbar
      Div.content
        Suggestion
        Options
        Notes
  ` 
})
