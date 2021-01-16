import React from 'react'
import { observer } from 'startupjs'
import './index.styl'
import { Div } from '@startupjs/ui'
import { Event } from '../../../../../components'


export default observer(function TeamEvents ({events}) {
  return pug`
    Div.root
        for item, i in events
          Div.event(styleName=i===0?'first':null)
            Event(
                title=item.title, 
                startDate=item.startDate
                finishDate=item.finishDate
                location=item.location)
  ` 
})
