import React, { useState } from 'react'
import { observer } from 'startupjs'
import './index.styl'
import { Div, Span, Row, Button } from '@startupjs/ui'
import { faChevronDown, faChevronLeft } from '@fortawesome/free-solid-svg-icons'

export default observer(function Options () {
  const [options, toggleOptions] = useState(false)
  return pug`
    Div.root
        Row.options-row(align='between' vAlign='center')
            Span.option(styleName='first') ALL
            Span.option(styleName='hidden') MOST LOVED
            Span.option(styleName='hidden') IN ACTION
            Span.option(styleName='hidden') ARCHIVE
            Button.option-btn(
            icon=options?faChevronLeft:faChevronDown 
            iconStyleName='option-icon' size='l' 
            onPress= ()=>toggleOptions(!options))
        if options
            Div.options-dropdown
                Span.option MOST LOVED
                Span.option IN ACTION
                Span.option ARCHIVE
            
  ` 
})
