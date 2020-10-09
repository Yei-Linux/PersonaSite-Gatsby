import React from "react"

import DynamicImage from "../DynamicImage"
import {
  LeftAndRightAnimation,
  LinearBorderAnimation
} from "../../styles/animationsComponents"
import { Wave } from "react-animated-text"
import {
  FlexContainer,
  TextContainer,
  MainTextBanner,
  SecondaryTextBanner,
  WoodenSign,
  BaseStickContainer,
  BaseStickElement
} from "./styledComponent"

interface Props {}

const Banner = ({}: Props) => {
  return (
    <DynamicImage
      imageName={"banner-sky.jpg"}
      width={"100%"}
      height={"95vh"}
      margin={"0"}
      borderRadius={"0"}
    >
      <FlexContainer>
        <LeftAndRightAnimation>
          <DynamicImage
            imageName={"banner-avatar.png"}
            children={null}
            width={"300px"}
            height={"250px"}
            margin={"0"}
            borderRadius={"0"}
          />
        </LeftAndRightAnimation>

        <WoodenSign>
          <LinearBorderAnimation>
            <TextContainer>
              <MainTextBanner>
                <Wave
                  text="Hi, Im Jesus Alvan"
                  effect="stretch"
                  effectChange={2.0}
                  delay={10.0}
                />
              </MainTextBanner>

              <SecondaryTextBanner>a FullStack Developer</SecondaryTextBanner>
            </TextContainer>
          </LinearBorderAnimation>
          <BaseStickContainer>
            <BaseStickElement />
          </BaseStickContainer>
        </WoodenSign>
      </FlexContainer>
    </DynamicImage>
  )
}

export default Banner
