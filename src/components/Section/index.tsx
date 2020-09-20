import React from 'react';

import { SectionContainer, SectionTitle, SectionSubTitle, SectionText } from "./styledComponent";
import DynamicImage from "../DynamicImage";

interface Props {
    isRow : boolean,
    isFirstBackground : boolean,
    imagePath: string
}
 
const Section = ({isRow, isFirstBackground, imagePath} : Props) => {
    return (
        <SectionContainer isRow={isRow} isFirstBackground={isFirstBackground}>
            <DynamicImage imageName={imagePath}  children={null} width={"300px"} height={"300px"} margin={"0"}/>
            
            <SectionText>
                <SectionTitle>
                    Let me Introduce myself.
                </SectionTitle>
                <SectionSubTitle>
                    I'm a FullStack Developer based in Lima, Peru.
                    I have a passion for programming and helping others.
                </SectionSubTitle>
            </SectionText>
        </SectionContainer>
    );
}
 
export default Section;