import { style, responsiveStyle } from 'styled-system'

export const display = responsiveStyle({
  prop: 'display',
  cssProperty: 'display',
})

export const fontFamily = style({
  prop: 'fontFamily',
  key: 'typeface',
  cssProperty: 'fontFamily',
})

export const lineHeight = style({
  prop: 'lineHeight',
  key: 'lineHeights',
  cssProperty: 'lineHeight',
})

export const textDecoration = style({
  prop: 'textDecoration',
  cssProperty: 'textDecoration',
})

export const textDecorationColor = style({
  prop: 'textDecorationColor',
  cssProperty: 'textDecorationColor',
})