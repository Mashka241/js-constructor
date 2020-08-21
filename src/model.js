import image from './img/img-example.jpg'
import { TitleBlock, TextBlock, TextColumnsBlock, ImgBlock } from './classes/blocks'
export const model = [
  new TitleBlock('Mountains', {
    tag: 'h2',
    styles: 'color: red; text-align: center; margin: 0; padding: 2rem; text-transform: uppercase'
  }),
  new TextBlock('Lorem ipsum dolor sit amet consectetur, adipisicing elit.', {
    styles: 'text-align: center; padding: 1rem;'
  }),
  new TextColumnsBlock(['1 text', '2 text', '3 text'], {
    styles: 'padding: 1rem; text-align: center;'
  }),
  new ImgBlock(image, {
    styles: 'padding: 1rem; text-align: center; display: flex; justify-content: center;',
    alt: 'Mountains',
    imgStyles: 'border: 1px solid black;'
  })
]
