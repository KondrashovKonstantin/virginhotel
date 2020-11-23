import React from 'react'
import { observer } from 'startupjs'
import { Image } from 'react-native'
import './index.styl'
import { Div, Span, Row, TextInput, Button, Divider } from '@startupjs/ui'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { faTimesCircle, faCheckCircle } from '@fortawesome/free-regular-svg-icons'
import Comment from '../Comment'

export default observer(function Note({title, number, author, date, text, votes, comments=[] }) {
    return pug`
          Div.note
            Row
                Div.note-number
                    Span.note-number_nmb #{number}
                Div.note-data
                    Span.note-title #{title}
                    Div.note-info
                    Span.note-author #{author}
                    Span.note-date #{date}
            Div
                Div.text-holder
                    Span.text-holder__text #{text}
                Row.actions(align='between')
                    Row.action
                        Button.action-btn(icon=faCheck iconStyleName='action-icon')
                        Span.action-text  VOTE: 
                            Span.action-count #{votes}
                    Row
                        Div.action
                            Button.action-btn(icon=faTimesCircle iconStyleName='action-icon' size='l')
                        Row.action
                            Button.action-btn(icon=faCheckCircle iconStyleName='action-icon' size='l')
                            Span.action-text  MANAGE
            Div.comments
                for i in comments
                    Comment(avaUri=i.avaUri, author=i.author, date=i.date, text=i.text)               
                Div.comment
                    Row
                        Div.ava
                            Image.ava-image(source={uri:'https://reactnative.dev/img/header_logo.svg'})
                        Div.data
                            TextInput(placeholder='Reply to this suggestion...' style={height:'32px'} )
        
  `
})
