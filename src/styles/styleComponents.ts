import tw from "tailwind.macro";
import styled from "@emotion/styled";

export const PotionsContainer = tw.div`
    flex
    justify-center
    items-center
    flex-wrap
    py-5
` 
export const WorkProjectsContainer = tw.div`
    flex 
    flex-col
    justify-center
    items-center
`

export const TextContainer = tw.div`
    flex 
    flex-col
    justify-center
    items-center
    m-4
`

export const TextTitle = tw.h4`
    p-4
    text-3xl
    font-indiecustom
    text-thirdvariant
    font-bold
    border-b-4
`

export const TextSubtitle = tw.p`
    p-4
    text-center
    text-lg
    font-semibold
`
export const Fixative = styled.a<{marginBottomStyle : string}>`
    display: block;
    margin-bottom: ${props => props?.marginBottomStyle}
`