import React from 'react';

import { SectionContainer, SectionTitle, SectionSubTitle, SectionText } from "./styledComponent";
import DynamicImage from "../DynamicImage";

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
            <DynamicImage imageName={imagePath}  children={null} width={"300px"} height={"300px"} margin={"0"}  borderRadius={borderRadius}/>
            
            <SectionText>
                <SectionTitle>
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