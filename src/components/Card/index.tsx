import React from "react"
import DynamicImage from "../DynamicImage"

import {
  CardContainer,
  TitleContainer,
  SubtitleContainer,
  ActionsContainer,
  InfoContainer,
  InfoButton,
  IconCard,
  TextContainer,
} from "./styledComponent"

interface Props {
  imagePath: string
  iconPath: string
  title: string
  subtitle: string
}

const Card = ({ imagePath, iconPath, title, subtitle }: Props) => {
  return (
    <CardContainer>
      <DynamicImage
        imageName={imagePath}
        width={"100%"}
        height={"11rem"}
        margin={"0"}
        borderRadius={"0"}
        children={null}
      />
      <IconCard>
        <DynamicImage
          imageName={iconPath}
          width={"8rem"}
          height={"8rem"}
          margin={"0"}
          borderRadius={"50%"}
          children={null}
        />
      </IconCard>

      <TextContainer>
        <TitleContainer>{title}</TitleContainer>
        <SubtitleContainer>{subtitle}</SubtitleContainer>

        <ActionsContainer>
          <InfoContainer>
            <InfoButton>Visit Web</InfoButton>
          </InfoContainer>
        </ActionsContainer>
      </TextContainer>
    </CardContainer>
  )
}

export default Card
