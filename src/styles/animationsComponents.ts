import styled from "@emotion/styled"
import { keyframes } from "@emotion/core"

const leftAndRightKeyframe = keyframes`
  0%   {left:-50px; top:0px;}
  25%  {left:50px; top:0px;}
  50%  {left:150px; top:0px;}
  75%  {left:50px; top:0px;}
  100% {left:-50px; top:0px;}
`

const bounceKeyframe = keyframes`
  from {
    transform: translateY(0px);
  }
  to {
    transform: translateY(-15px);
  }
`

export const LeftAndRightAnimation = styled.div`
  position: relative;
  animation-name: ${leftAndRightKeyframe};
  animation-duration: 4s;
  animation-iteration-count: infinite;
`

export const BounceAnimation = styled.div`
  position: relative;
  animation: ${bounceKeyframe} 1s infinite alternate;
`
