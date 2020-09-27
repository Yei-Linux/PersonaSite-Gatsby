import React from 'react';

import { SectionContainer, SectionTitle, SectionSubTitle, SectionText } from "./styledComponent";
import DynamicImage from "../DynamicImage";

import { BounceAnimation } from "../../styles/animationsComponents";

interface Props {
    isRow : boolean,
    isFirstBackground : boolean,
    imagePath: string,
    isReverse : boolean,
    borderRadius : string,
    sectionTitle: string,
    children : React.ReactNode
}
 
const Section = ({isRow, isFirstBackground, imagePath, isReverse, borderRadius, sectionTitle , children} : Props) => {
    return (
        <SectionContainer isRow={isRow} isFirstBackground={isFirstBackground} isReverse={isReverse}>
            <BounceAnimation>
                <DynamicImage imageName={imagePath}  children={null} width={"300px"} height={"300px"} margin={"0"}  borderRadius={borderRadius}/>
            </BounceAnimation>
            
            <SectionText>
                <SectionTitle isFirstBackground={isFirstBackground}>
                    {sectionTitle}
                </SectionTitle>
                <SectionSubTitle>
                    {children}
                </SectionSubTitle>
            </SectionText>
        </SectionContainer>
    );
}
 
export default Section;