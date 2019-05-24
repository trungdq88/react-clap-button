import styled, { css } from 'styled-components'
import { textStyles } from '../utils'

const ClapCountTotal = styled.span`
  transform: scale(1);
  text-align: center;
  left: 0;
  ${textStyles} ${({ theme: { textColor, size } }) => css`
    top: -${size / 3}px;
    color: ${textColor};
    width: ${size}px;
  `};
`

export default ClapCountTotal
