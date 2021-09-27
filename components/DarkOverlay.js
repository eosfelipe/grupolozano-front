import styled from '@emotion/styled'
import { css } from '@emotion/react'
import LoadingOverlay from 'react-loading-overlay'
import BounceLoader from 'react-spinners/BounceLoader'

const Background = styled.div`
  display: none;
  position: fixed;
  z-index: 999;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: #f5f5f5;
  ${props =>
    props.disappear &&
    css`
      display: block;
    `}

  ._loading_overlay_content {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    position: fixed;
  }
`

const DarkOverlay = ({ loading }) => {
  return (
    <Background disappear={loading}>
      <LoadingOverlay active={loading} spinner={<BounceLoader color="#D01F28" />} />
    </Background>
  )
}

export default DarkOverlay
