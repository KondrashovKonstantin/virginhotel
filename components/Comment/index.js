import React from 'react'
import { observer } from 'startupjs'
import { Image } from 'react-native'
import './index.styl'
import { Div, Span, Row, Divider, Button} from '@startupjs/ui'
import { faTimesCircle } from '@fortawesome/free-regular-svg-icons'

export default observer(function Note({avaUri, author, date, text}) {
    return pug`
        Div.root
            Row
                Div.ava
                    Image.ava-image(source={uri:avaUri})
                Div.data
                    Span.data-author #{author}
                    Span.data-date #{date}
                Div.action
                    Button(icon=faTimesCircle iconStyleName='times-icon' style={border:'none'})
            Span.comment-text #{text}   
            Divider.divider
  `
})
