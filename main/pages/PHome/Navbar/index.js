import React from 'react'
import { observer } from 'startupjs'
import { Div, Icon, Span, Row, Divider } from '@startupjs/ui'
import './index.styl'
import { faHeart, faMap, faCommentAlt } from '@fortawesome/free-regular-svg-icons'
import text from '../../../../public/make-love-text.svg'
import HotelEvents from './HotelEvents'
import TeamEvents from './TeamEvents'

const event1 = [
  {
    title: 'ST PATRIKS DAY CELEBRATION',
    location: 'FDR',
    startDate: new Date('March 17, 2019 13:00:00'),
    finishDate: new Date('March 17, 2019 14:00:00')
  },
  {
    title: 'MARCH MADNESS AT FDR',
    location: 'FDR',
    startDate: new Date('March 18, 2019 13:00:00'),
    finishDate: new Date('March 17, 2019 14:00:00')
  }
]

const event2 = [
  {
    title: 'UPSIDE DOWN TEA PARTY',
    location: 'COMMONS CLUB',
    startDate: new Date('March 17, 2019 13:00:00'),
    image: 'https://cdn.mos.cms.futurecdn.net/E5YcNgHufPfeEW3murthjN-970-80.jpg.webp'
  },
  {
    title: 'SKY HIGH ST. PATTYS\'S DAY',
    location: 'CERISE',
    startDate: new Date('March 18, 2019 13:00:00'),
    image: 'https://cdn.mos.cms.futurecdn.net/E5YcNgHufPfeEW3murthjN-970-80.jpg.webp'
  },
  {
    title: 'ST PATRICK\'S DAY TAKEOVER',
    location: 'COMMONS CLUB + CERISE',
    startDate: new Date('March 17, 2019 13:00:00'),
    image: 'https://cdn.mos.cms.futurecdn.net/E5YcNgHufPfeEW3murthjN-970-80.jpg.webp'
  }
]

const iconsText = [
  { icon: faHeart, text: 'BOOK\nOF LOVE' },
  { icon: faMap, text: 'CULTURE\nMAP' },
  { icon: faCommentAlt, text: 'SEND\nFEEDBACK' }
]

export default observer(function Navbar () {
  return pug`
    Div.root
      Div.section(styleName='white')
        Icon.makelove(icon=text)
        Span.text(styleName='red') #MLSH
      Div.section(styleName='grey')
        Row.icons(align='around')
          each item, i in iconsText
            Div.iconWrapper(key=i)
              Icon.icon(icon=item.icon size=35)
              Span.iconText= item.text
      Div.section
        Span.title(styleName='red small') TEAMMATE
        Span.title(styleName='red big') EVENTS
        Divider(style={width:'60px'})
        Div.eventsHolder
          TeamEvents(events=event1)
      Div.section(styleName='second')
        Span.title(styleName='red small') HOTEL
        Span.title(styleName='red big') EVENTS
        Divider(style={width:'60px'})
        Div.eventsHolder
          HotelEvents(events=event2)
  `
})
