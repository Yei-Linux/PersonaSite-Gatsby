import styled from "@emotion/styled"
import tw from "tailwind.macro";

export const PotionParentContainer = tw.div`
    flex
    flex-col
    justify-center
    items-center
    w-fit 
    m-4
`

export const PotionTitle = tw.p`
    text-xl
    font-semibold
    h-auto
    text-blue-800
    w-auto
    text-center
    py-4
`

export const PosionBox = styled.div`
  position: relative;
  background: none;
  width: 30px;
  height: 80px;
  display: block;
  margin: 0;
`

export const PosionContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: none;
  top: 0;
  left: 0;
`

export const PosionGlass = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  background: #b5f0e8;
  opacity: 0.7;
  top: 0;
  left: 0;
  border-bottom-left-radius: 50px;
  border-bottom-right-radius: 50px;
  z-index: 2;
`

export const PosionLeftSide = styled.div`
  position: absolute;
  width: 50%;
  height: 15%;
  top: -15%;
  background: #b9661c;
`

export const PosionRightSide = styled.div`
  position: absolute;
  width: 50%;
  height: 15%;
  top: -15%;
  right: 0%;
  background: #9a501d;
`

export const PosionFill = styled.div`
  position: absolute;
  height: ${props => props?.potionHeight};
  width: 80%;
  background: ${props => props?.potionColor};
  opacity: 0.8;
  bottom: 5%;
  left: 10%;
  border-bottom-left-radius: 50px;
  border-bottom-right-radius: 50px;
  animation: slime 1.5s infinite;
  z-index: 1;
`

export const PosionFirstBubble = styled.div`
  position: absolute;
  height: 10%;
  width: 35%;
  top: 10%;
  left: 15%;
  border-radius: 50%;
  background: ${props => props?.potionBubbleColor};
`

export const PosionSecondBubble = styled.div`
  position: absolute;
  height: 8%;
  width: 33%;
  top: 25%;
  right: 15%;
  border-radius: 50%;
  background: ${props => props?.potionBubbleColor};
`

export const PosionThirdBubble = styled.div`
  position: absolute;
  height: 10%;
  width: 35%;
  top: 40%;
  left: 15%;
  border-radius: 50%;
  background: ${props => props?.potionBubbleColor};
`

export const PosionFourthBubble = styled.div`
  position: absolute;
  height: 8%;
  width: 33%;
  top: 55%;
  right: 15%;
  border-radius: 50%;
  background: ${props => props?.potionBubbleColor};
`

export const PosionFifthBubble = styled.div`
  position: absolute;
  height: 8%;
  width: 33%;
  top: 75%;
  left: 15%;
  border-radius: 50%;
  background: ${props => props?.potionBubbleColor};
`
