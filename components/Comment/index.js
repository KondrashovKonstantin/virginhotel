import React from 'react'
import { Image } from 'react-native'
import { observer } from 'startupjs'
import './index.styl'
import { Div, Span, Row, Divider, Button } from '@startupjs/ui'
import { faTimesCircle } from '@fortawesome/free-regular-svg-icons'

export default observer(function Comment ({ avaUri, author, date, text }) {
  return pug`
    Div.root
      Row
        Div.ava
          Image.avaImage(source={uri:avaUri})
        Div.data
          Span.author= author
          Span.date= date
        Div.action
          Button(icon=faTimesCircle iconStyleName='timesIcon' variant='text')
      Span.commentText= text   
      Divider.divider
  `
})
