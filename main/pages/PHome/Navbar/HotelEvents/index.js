import React from 'react'
import { observer } from 'startupjs'
import './index.styl'
import { Div } from '@startupjs/ui'
import { Event } from 'components'

export default observer(function HotelEvents ({ events }) {
  return pug`
    Div.root
      for item,i in events
        Div.event(styleName={first:!i})
          Event(
            withImage
            title=item.title, 
            startDate=item.startDate
            image=item.image
            location=item.location
          )
`
})
