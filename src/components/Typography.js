import React from 'react'
import styled, { withComponent } from 'react-emotion'
import {
  display,
  space,
  width,
  fontSize,
  color,
  textAlign,
  fontWeight,
  fontFamily,
  lineHeight,
  border,
  borderTop,
  borderRight,
  borderBottom,
  borderLeft,
  borderColor,
  borderRadius,
  hover,
  focus,
  active,
} from 'styled-system'
import { Text } from './Layout'

const Title = Text.withComponent('h1')
const Subtitle = Text.withComponent('h2')

const Paragraph = styled.p`
  max-width: 33em;
  ${space};
  ${width};
  ${fontSize};
  ${color};
  ${textAlign};
  ${fontWeight};
  ${border};
  ${borderTop};
  ${borderRight};
  ${borderBottom};
  ${borderLeft};
  ${borderColor};
  ${borderRadius};
  ${hover};
  ${focus};
  ${active};
  ${fontFamily};
  ${lineHeight};
`

const Rule = styled.hr`
  width: 100%;
  max-width: 8rem;
  margin-left: 0;
  margin-right: 0;
  border: ${({ theme }) => theme.borders[2]};
  border-color: ${({ theme }) => theme.colors.orange};
  ${space};
`

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style-type: none;
  ${space};
  ${fontSize};
  ${color};
  ${fontWeight};
  ${textAlign};
  ${fontFamily};
  ${lineHeight};
`
const ListItem = styled.li`
  ${display};
  ${space};
  ${fontSize};
  ${color};
  ${textAlign};
  ${fontWeight};
  ${border};
  ${borderTop};
  ${borderRight};
  ${borderBottom};
  ${borderLeft};
  ${borderColor};
  ${borderRadius};
  ${fontFamily};
`

export { Title, Subtitle, Paragraph, Rule, List, ListItem }
