import React, { useState } from 'react'
import { observer } from 'startupjs'
import './index.styl'
import { Div, Span, Row, Button } from '@startupjs/ui'
import { faChevronDown, faChevronLeft } from '@fortawesome/free-solid-svg-icons'

const optionsList = ['ALL', 'MOST LOVED', 'IN ACTION', 'ARCHIVE']

export default observer(function Options () {
  const [options, toggleOptions] = useState(false)
  return pug`
    Div.root
      Row.optionsRow(align='between' vAlign='center')
        each item,i in optionsList
          Span.option(styleName={first:!i,hidden:i} key = i)= item
        Button.optionBtn(
          icon=options?faChevronLeft:faChevronDown 
          iconStyleName='option-icon' size='l' 
          onPress= ()=>toggleOptions(!options)
        )
      if options
        Div.optionsDropdown
          each item,i in optionsList 
            if i
              Span.option(key = i)= item       
  `
})
