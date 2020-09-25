import React from "react"

import {
  PotionParentContainer,
  PotionTitle,
  PosionBox,
  PosionContainer,
  PosionGlass,
  PosionLeftSide,
  PosionRightSide,
  PosionFill,
  PosionFirstBubble,
  PosionSecondBubble,
  PosionThirdBubble,
  PosionFourthBubble,
  PosionFifthBubble,
} from "./styledComponent"

interface Props {
    potionTitle : string,
    potionBubbleColor : string,
    potionColor : string,
    potionHeight : string
}

const Potion = ({potionTitle, potionBubbleColor, potionColor, potionHeight}: Props) => {
  return (
    <PotionParentContainer>
      <PosionBox>
        <PosionContainer>
          <PosionGlass>
            <PosionLeftSide />
            <PosionRightSide />
            <PosionFill potionColor={potionColor} potionHeight={potionHeight}>
              <PosionFirstBubble potionBubbleColor={potionBubbleColor}/>
              <PosionSecondBubble  potionBubbleColor={potionBubbleColor}/>
              <PosionThirdBubble  potionBubbleColor={potionBubbleColor}/>
              <PosionFourthBubble  potionBubbleColor={potionBubbleColor}/>
              <PosionFirstBubble  potionBubbleColor={potionBubbleColor}/>
              <PosionFifthBubble  potionBubbleColor={potionBubbleColor}/>
            </PosionFill>
          </PosionGlass>
        </PosionContainer>
      </PosionBox>

      <PotionTitle>{potionTitle}</PotionTitle>
    </PotionParentContainer>
  )
}

export default Potion
