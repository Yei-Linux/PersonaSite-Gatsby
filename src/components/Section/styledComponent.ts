import styled from "@emotion/styled";
import tw from "tailwind.macro";

export const SectionContainer = styled.div`
    ${tw`flex justify-center items-center py-8`}
    ${props => (props?.isRow ? tw`flex-row` : tw`flex-col`)};
    ${props => (props?.isFirstBackground ? tw`bg-white` : tw`bg-teal-400`)};
    ${props => (props?.isReverse ? (props?.isRow ? tw`flex-row-reverse` :tw`flex-col-reverse`) : null )};
`

export const SectionText = tw.div`
    flex
    flex-col
    justify-center 
    items-center
    m-8
`

export const SectionTitle = tw.h4`
    text-3xl
    font-semibold
    h-auto
    text-yellow-600
    w-80
    text-center
    py-4
    border-b-4
`

export const SectionSubTitle = tw.h4`
    text-xl
    font-semibold
    h-auto
    text-blue-800
    w-80
    text-center
    py-4
    italic
`