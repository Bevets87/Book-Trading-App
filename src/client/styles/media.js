import { css } from 'styled-components'

const sizes = {
  desktop: 1200,
  tablet: 900,
  phone: 600
}


export default Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (max-width: ${sizes[label]}px) {
      ${css(...args)}
    }
  `

  return acc
}, {})


