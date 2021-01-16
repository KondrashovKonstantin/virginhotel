import React, { useEffect, useState } from 'react'
import { Image, ImageBackground, ScrollView } from 'react-native'
import { observer, emit, useValue, useLocal } from 'startupjs'
import './index.styl'
import { Row, Div, Layout, SmartSidebar, Menu, Button, H1, Span, Sidebar } from '@startupjs/ui'
import { faArrowLeft, faBars, faImage } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'

import APP from '../../app.json'

const { displayName } = APP
const APP_NAME = displayName.charAt(0).toUpperCase() + displayName.slice(1)

const BASE_URL = 'http://localhost:3010/public/'
const logo = BASE_URL + 'main-logo-white.png'
const back = BASE_URL + 'background.png'



export default observer(function ({ children }) {
  const [opened, $opened] = useValue(false)

  function renderSidebar() {
    return pug`
      Menu.sidebar-menu
        Row.logo-holder(vAlign='center')
          Button.btn( 
            icon=faArrowLeft 
            onPress=() => $opened.set(!opened) 
            color='white'
            size='xl')
          Image.logo-img(source={uri:logo})
        Div.items-holder
          Div.item
            Span.item-text VALENTINES
          Div.item
            Span.item-text V &#129293; PEEPS
          Div.item
            Span.item-text V &#129293; PREP
          Div.item
            Span.item-text CULTURE
          Div.item
            Span.item-text TRIBE
          Div.item
            Span.item-text RESOURCES
          Div.item
            Span.item-text V &#129293; WELL
        Div.social
          Button.social-button(icon=faFacebook iconStyleName='social-icon' size='xl')
          Button.social-button(icon=faInstagram iconStyleName='social-icon' size='xl')
          Button.social-button(icon=faLinkedin iconStyleName='social-icon' size='xl')
          Button.social-button(icon=faTwitter iconStyleName='social-icon' size='xl')


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
                Image.header-logo(source={uri:logo})
                Div.header-item
                  Span.header-text VALENTINES
                Div.header-item
                  Span.header-text V &#129293; PEEPS
                Div.header-item
                  Span.header-text V &#129293; PREP
                Div.header-item
                  Span.header-text CULTURE
                Div.header-item
                  Span.header-text TRIBE
                Div.header-item
                  Span.header-text RESOURCES
                Div.header-item
                  Span.header-text V &#129293; WELL
              Span.big-header BARE IT!
                
            Div.body= children
  `
})
