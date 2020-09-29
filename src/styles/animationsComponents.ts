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
export const bubbleBorderKeyframe = keyframes`
  0% {
			border-radius:  60% 40% 30% 70% / 60% 30% 70% 40%;
			background: linear-gradient(45deg, #88D5BF 0%, #5D6BF8 100%);
	} 
	
	50% {
			border-radius:  30% 60% 70% 40% / 50% 60% 30% 60%;
			background: linear-gradient(45deg, #e27fcb 0%, #5D6BF8 100%);
	}
  
	100% {
		border-radius:  60% 40% 30% 70% / 60% 30% 70% 40%;
		background: linear-gradient(45deg, #88D5BF 0%, #5D6BF8 100%);
	} 
`

export const linearBorderKeyframe = keyframes`
	100% {
		transform: rotate(1turn);
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
export const BubbleBorderAnimation = styled.div`
  background: linear-gradient(45deg, #88D5BF 0%, #5D6BF8 100%);
  animation: ${bubbleBorderKeyframe} 8s ease-in-out infinite;
  border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
  height: 400px;
  transition: all 1s ease-in-out;
  width: 400px;
  z-index: 5;
`

export const LinearBorderAnimation = styled.div`
  position: relative;
	z-index: 0;
	border-radius: 10px;
	overflow: hidden;
	padding: 2rem;
	
	&::before {
		content: '';
		position: absolute;
		z-index: -2;
		left: -50%;
		top: -50%;
		width: 200%;
		height: 200%;
		background-color: #faf3dd;
		background-repeat: no-repeat;
		background-size: 50% 50%, 50% 50%;
		background-position: 0 0, 100% 0, 100% 100%, 0 100%;
		background-image: linear-gradient(#ffd166, #ffd166), linear-gradient(#7510f7, #7510f7), linear-gradient(#7510f7, #7510f7), linear-gradient(#ffd166, #ffd166);
		animation: ${linearBorderKeyframe} 4s linear infinite;
	}
	
	&::after {
		content: '';
		position: absolute;
		z-index: -1;
		left: 6px;
		top: 6px;
		width: calc(100% - 12px);
		height: calc(100% - 12px);
		background: white;
		border-radius: 5px;
	}
`
