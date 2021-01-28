import React from 'react'
import { Image, ImageBackground, ScrollView } from 'react-native'
import { observer, useValue } from 'startupjs'
import './index.styl'
import { Row, Div, Layout, SmartSidebar, Menu, Button, Span } from '@startupjs/ui'
import { faArrowLeft, faBars } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'

const BASE_URL = 'http://localhost:3010/public/'
const logo = BASE_URL + 'main-logo-white.png'
const back = BASE_URL + 'background.png'

const items = [
  'VALENTINES',
  `V ${String.fromCodePoint('0x1F90D')} PEEPS`,
  `V ${String.fromCodePoint('0x1F90D')} PREP`,
  'CULTURE',
  'TRIBE',
  'RESOURCES',
  `V ${String.fromCodePoint('0x1F90D')} WELL`
]

const socials = [faFacebook, faTwitter, faInstagram, faLinkedin]

export default observer(function ({ children }) {
  const [opened, $opened] = useValue(false)

  function renderSidebar () {
    return pug`
      Menu.sidebarMenu
        Row.logoHolder(vAlign='center')
          Button.btn( 
            icon=faArrowLeft 
            onPress=() => $opened.set(!opened) 
            color='white'
            size='xl')
          Image.logoImg(source={uri:logo})
        Div.itemsHolder
          each item in items
            Div.item(key = item)
              Span.itemText= item
        Div.social
          each item,i in socials
            Button.socialButton(
              icon=item 
              iconStyleName='socialIcon' 
              styleName={first:!i} 
              size='xl'
              key=i  
            )
    `
  }

  return pug`
    Layout
      SmartSidebar.sidebar(
        path=$opened.path()
        renderContent=renderSidebar
        width=320
      )
        ScrollView.main
          ImageBackground.back(source={uri:back} imageStyle={height:'820px'})
            Div.header
              Row(vAlign='center' align='between')
                if !opened
                  Button.btn(color='white' size='xl' icon=faBars onPress=() => $opened.set(!opened))
                Image.headerLogo(source={uri:logo})
                each item in items
                  Div.headerItem(key=item)
                    Span.headerText= item
              Span.bigHeader BARE IT!
            Div.body= children
  `
})
