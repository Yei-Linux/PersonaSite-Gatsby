import React from "react"
import SocialNetworks from "../../components/SocialNetworks"

import { Wave } from "react-animated-text"
import {
  FooterContainer,
  PreFooter,
  FooterContent,
  PreFooterTitle,
  FooterText,
  FooterSubtext,
  FooterInformation,
  PreFooterButton,
} from "./styledComponent"

import DynamicImage from "../../components/DynamicImage"

interface Props {
  isPreFooter: boolean
}

const Footer = ({ isPreFooter }: Props) => {
  return (
    <FooterContainer>
      {isPreFooter && (
        <PreFooter>
          <PreFooterTitle>
            <Wave
              text="I occasionally take on freelance opportunities."
              effect="stretch"
              effectChange={2.0}
            />
          </PreFooterTitle>
          <PreFooterButton>I got it!</PreFooterButton>
        </PreFooter>
      )}

      <DynamicImage
        imageName={"iconPage.jpg"}
        width={"8rem"}
        height={"8rem"}
        margin={"0"}
        borderRadius={"50%"}
        children={null}
      />
      <FooterInformation>
        Living, learning, & leveling up one day at a time.
      </FooterInformation>
      <SocialNetworks color="#fff" backgroundColor={"#7f9cf5"} />
      <FooterContent>
        <FooterText>Handcrafted by me © YeiLinux</FooterText>
        <FooterSubtext>Made with Gatsby</FooterSubtext>
      </FooterContent>
    </FooterContainer>
  )
}

export default Footer
