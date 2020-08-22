import image from './img/img-example.jpg'
import { TitleBlock, TextBlock, TextColumnsBlock, ImgBlock } from './classes/blocks'
import { css } from './utils'
export const model = [
  new TitleBlock('Mountains', {
    tag: 'h2',
    styles: css({
      color: 'blue',
      'text-align': 'center',
      margin: 0,
      padding: '2rem',
      'text-transform': 'uppercase'
    })
  }),
  new TextBlock('Lorem ipsum dolor sit amet consectetur, adipisicing elit.', {
    styles: css({
      'text-align': 'center',
      padding: '1rem'
    })
  }),
  new TextColumnsBlock(['1 text', '2 text', '3 text'], {
    styles: css({
      'text-align': 'center',
      padding: '1rem'
    })
  }),
  new ImgBlock(image, {
    styles: css({
      'text-align': 'center',
      padding: '1rem',
      display: 'flex',
      'justify-content': 'center'
    }),
    alt: 'Mountains',
    imgStyles: 'border: 1px solid black;'
  })
]
