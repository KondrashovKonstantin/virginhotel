import React from 'react'
import { Image } from 'react-native'
import { observer } from 'startupjs'
import './index.styl'
import { Div, Span, Row, Divider } from '@startupjs/ui'

export default observer(function Event ({ startDate = new Date(), finishDate = new Date(), title, location, withImage = false, image }) {
  let formatTime = (date) => {
    let hours = date.getHours()
    let minutes = date.getMinutes()
    let ampm = hours >= 12 ? 'pm' : 'am'
    hours = hours % 12
    hours = hours || 12
    minutes = minutes < 10 ? '0' + minutes : minutes
    let strTime = hours + ':' + minutes + ampm
    return strTime
  }

  let getStringDay = (date) => {
    switch (date.getDay()) {
      case 0: return 'SAT'
      case 1: return 'MON'
      case 2: return 'TUE'
      case 3: return 'WED'
      case 4: return 'THU'
      case 5: return 'FRI'
      case 6: return 'SUN'
      default: return 'MON'
    }
  }
  let getStringMonth = (date) => {
    switch (date.getMonth()) {
      case 0: return 'JAN'
      case 1: return 'FEB'
      case 2: return 'MAR'
      case 3: return 'APR'
      case 4: return 'MAY'
      case 5: return 'JUN'
      case 6: return 'JUL'
      case 7: return 'AUG'
      case 8: return 'SEP'
      case 9: return 'OCT'
      case 10: return 'NOV'
      case 11: return 'DEC'
      default: return 'DEC'
    }
  }
  console.log(image)
  return pug`
    if withImage
      Row.event
        Div.imageWrapp
          Image.eventImage(source={uri:image})
        Div.info
          Span(styleName='red')= title
          Span= location
          Span= startDate.toLocaleDateString('en-US',{ month: 'long', year: 'numeric', day: 'numeric', hour:'2-digit', minute:'2-digit' })
    else
      Row.event
        Div.dateHolder
          Span(styleName='red')= getStringDay(startDate) +'\n' + getStringMonth(startDate)
          Span.number(styleName='red')= startDate.getDate()
        Div.info
          Span(styleName='red')= title
          Span= location
          Span= formatTime(startDate) + '-' + formatTime(finishDate)
    Divider.divider
  `
})
