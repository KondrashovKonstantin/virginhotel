import React from 'react'
import { observer } from 'startupjs'
import './index.styl'
import { Div, Span, TextInput, Button } from '@startupjs/ui'

export default observer(function Suggestion () {
  return pug` 
    Div.root
      Span.title(styleName='red big') ADD A SUGGESTION
      Span.title(styleName='red small') WE LOVE TO HEAR NEW IDEAS ON HOW TO BE EVEN MORE AWESOME
      TextInput.input(placeholder='Title of suggestion?')
      TextInput.input(placeholder='Make a suggestion' multiline numberOfLines=4)
      Div.btnHolder
        Div.holder
          Span.txt To send a private suggestion email us at:
          Span.txt(styleName='red') CULTURE@VIRGINHOTEL.COM
        Button.postBtn POST
  `
})
