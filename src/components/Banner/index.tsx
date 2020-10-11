import React from "react"

import DynamicImage from "../DynamicImage"
import {
  FlexContainer, TextPresentation, TextPresentationContainer
} from "./styledComponent"

import GitBanner from "../../gifs/gif-banner.gif";

interface Props {}

const Banner = ({}: Props) => {
  return (
    <DynamicImage
      imageName={""}
      width={"100%"}
      height={"95vh"}
      margin={"0"}
      borderRadius={"0"}
      backgroundSize={"100% 110%"}
      isGif={true}
      gifPath={GitBanner}
    >
      <FlexContainer>
          <TextPresentationContainer>
            <TextPresentation>Welcome, Im Jesus Alvan a FullStack Developer</TextPresentation>
          </TextPresentationContainer>
      </FlexContainer>
    </DynamicImage>
  )
}

export default Banner
