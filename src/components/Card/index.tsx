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
  TextContainer, OtherInfoContainer, OtherInfoButton, TextProcess, ProcessInfoContainer
} from "./styledComponent"

interface Props {
  imagePath: string
  iconPath: string
  title: string
  subtitle: string
  backgroundSize?: string,
  frontUrl? : string,
  backUrl? : string,
  webUrl ? : string,
  isInprocess ? : boolean
}

const Card = ({ imagePath, iconPath, title, subtitle, backgroundSize = "cover", frontUrl = "", backUrl = "", webUrl= "", isInprocess = false }: Props) => {
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
          backgroundSize={backgroundSize}
        />
      </IconCard>

      <TextContainer>
        <TitleContainer>{title}</TitleContainer>
        <SubtitleContainer>{subtitle}</SubtitleContainer>

        <ActionsContainer>
          <OtherInfoContainer>
            {frontUrl !== "" && <OtherInfoButton href={frontUrl} target={"_blank"} isFront={true}>Front</OtherInfoButton>}
            {backUrl !== "" &&  <OtherInfoButton href={backUrl} target={"_blank"} isFront={false}>Back</OtherInfoButton>}
          </OtherInfoContainer>
          <InfoContainer>
            {webUrl !== "" && <InfoButton href={webUrl} target={"_blank"}>Visit Web</InfoButton>}
          </InfoContainer>
          <ProcessInfoContainer>
            { isInprocess &&  <TextProcess>En Proceso</TextProcess>}
          </ProcessInfoContainer>
        </ActionsContainer>
      </TextContainer>
    </CardContainer>
  )
}

export default Card
