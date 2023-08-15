import { keyframes } from '@emotion/react'
import styled from '@emotion/styled'

const pulse = keyframes`
    0% {
      transform: scale(0.9);
    }
    70% {
      transform: scale(1);
      box-shadow: 0 0 0 50px rgba(#5a99d4, 0);
    }
    100% {
      transform: scale(0.9);
      box-shadow: 0 0 0 0 rgba(#5a99d4, 0);
    }
  
`

export const PulseButton = styled.span`
  position: fixed;
  top: 50%;
  right: 50px;
  z-index: 1102;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 90px;
  height: 90px;
  font-size: 1.3em;
  text-align: center;
  line-height: 100px;
  letter-spacing: -1px;
  color: white;
  border: none;
  border-radius: 50%;
  background: #d01f28;
  cursor: pointer;
  box-shadow: 5px 5px 0px 0px rgba(176, 90, 90, 0.5);
  animation: ${pulse} 1.5s infinite;

  &:hover {
    animation: none;
  }
`
