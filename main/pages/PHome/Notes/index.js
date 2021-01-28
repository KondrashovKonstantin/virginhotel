import React from 'react'
import { observer } from 'startupjs'
import './index.styl'
import { Div } from '@startupjs/ui'
import { Note } from 'components'

const notes = [
  {
    title: 'CLASSES',
    author: 'Rebeca La Malfa',
    date: 'over 3 years ago',
    text: 'I think it would be amazing to offer Ecxel and other computer refresher classes',
    votes: 6,
    number: 15,
    comments: [
      {
        avaUri: 'https://reactnative.dev/img/header_logo.svg',
        author: 'Rebeca La Malfa',
        date: 'over 3 years ago',
        text: 'Corey i will bake you what ever you want!!'
      },
      {
        avaUri: 'https://reactnative.dev/img/header_logo.svg',
        author: 'Clio Knowles',
        date: 'over 3 years ago',
        text: 'Hi Rebeca, Great suggestion! We can definitely make this happen. We\'ll update you with further details...Thanks!'
      }
    ]
  },
  {
    title: 'VIRGIN HOTEL HOLIDAY COOKIE SWAP',
    author: 'Rebeca La Malfa',
    date: 'over 3 years ago',
    text: 'Would anyone be interested in participating?',
    votes: 5,
    number: 14
  },
  {
    title: 'TEST LONG TEXT',
    author: 'Rebeca La Malfa',
    date: 'over 3 years ago',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Scelerisque purus semper eget duis at tellus. At ultrices mi tempus imperdiet nulla malesuada. Gravida quis blandit turpis cursus in hac habitasse platea. Cras sed felis eget velit aliquet sagittis id consectetur purus. Volutpat commodo sed egestas egestas. Lorem ipsum dolor sit amet consectetur adipiscing elit. Imperdiet sed euismod nisi porta. Nunc mi ipsum faucibus vitae aliquet nec ullamcorper sit amet. Neque vitae tempus quam pellentesque nec. Risus quis varius quam quisque. Blandit cursus risus at ultrices mi tempus imperdiet nulla malesuada. Ut placerat orci nulla pellentesque. Enim neque volutpat ac tincidunt. Nisl pretium fusce id velit. Ut ornare lectus sit amet est placerat in egestas erat. Egestas diam in arcu cursus euismod quis viverra. Tellus in metus vulputate eu. In fermentum et sollicitudin ac orci phasellus egestas tellus. Odio eu feugiat pretium nibh ipsum consequat nisl vel.',
    votes: 5,
    number: 13
  }
]
export default observer(function Notes () {
  return pug`
    Div.root
      for item in notes
        Note(
          title=item.title, 
          author=item.author, 
          date=item.date, 
          number=item.number, 
          comments=item.comments, 
          text=item.text
          votes=item.votes)
    
  `
})
