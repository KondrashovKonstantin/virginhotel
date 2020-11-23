import React from 'react'
import { observer } from 'startupjs'
import './index.styl'
import { Div, Span, TextInput, Button } from '@startupjs/ui'


export default observer(function Suggestion () {

  return pug` 
    Div.suggestion
        Span.title(styleName='red big-title') ADD A SUGGESTION
        Span.title(styleName='red small-title') WE LOVE TO HEAR NEW IDEAS ON HOW TO BE EVEN MORE AWESOME
        TextInput.input(placeholder='Title of suggestion?')
        TextInput.input(placeholder='Make a suggestion' multiline numberOfLines=4)
            Div.simple-text
        Div.btn-holder
            Div
                Span.simple-text_text To send a private suggestion email us at:
                Span.simple-text_text(styleName='red') CULTURE@VIRGINHOTEL.COM
            Button.post-btn POST
  ` 
})
