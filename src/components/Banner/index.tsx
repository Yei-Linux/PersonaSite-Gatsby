import React from 'react';

import DynamicImage from "../DynamicImage";

import { FlexContainer,TextContainer, MainTextBanner, SecondaryTextBanner } from "./styledComponent";

interface Props {
}
 
const Banner = ({} : Props) => {
    return (
      <DynamicImage imageName={"banner-sky.jpg"} width={"100%"} height={"95vh"} margin={"0"} borderRadius={"0"}>
        <FlexContainer>
          <DynamicImage imageName={"banner-avatar.png"}  children={null} width={"300px"} height={"250px"} margin={"0"}  borderRadius={"0"}/>
  
          <TextContainer>
            <MainTextBanner>I'm Jesus Alvan</MainTextBanner>
            <SecondaryTextBanner>a FullStack Developer</SecondaryTextBanner>
          </TextContainer>
        </FlexContainer>
      </DynamicImage>
    );
}
 
export default Banner;