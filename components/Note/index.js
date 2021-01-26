import React from 'react'
import { Image } from 'react-native'
import { observer } from 'startupjs'
import './index.styl'
import { Div, Span, Row, TextInput, Button } from '@startupjs/ui'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { faTimesCircle, faCheckCircle } from '@fortawesome/free-regular-svg-icons'
import Comment from '../Comment'

export default observer(function Note ({ title, number, author, date, text, votes, comments = [] }) {
  return pug`
    Div.note
      Row
        Div.noteNumber
          Span.noteNumberTxt= number
        Div.noteData
          Span.noteTitle= title
          Div.noteInfo
          Span.noteAuthor= author
          Span.noteDate= date
      Div
        Div.textHolder
          Span.textHolderText= text
        Row.actions(align='between')
          Row.action
            Button.actionBtn(icon=faCheck iconStyleName='actionIcon')
            Span.actionText  VOTE: 
              Span.actionCount= votes
          Row
            Div.action
              Button.actionBtn(icon=faTimesCircle iconStyleName='actionIcon' size='l')
            Row.action
              Button.actionBtn(icon=faCheckCircle iconStyleName='actionIcon' size='l')
              Span.actionText  MANAGE
      Div.comments
        for i in comments
          Comment(avaUri=i.avaUri, author=i.author, date=i.date, text=i.text)         
        Div.comment
          Row
            Div.ava
              Image.avaImage(source={uri:'https://reactnative.dev/img/header_logo.svg'})
            Div.data
              TextInput.input(placeholder='Reply to this suggestion...')
    
  `
})
