import styled from "@emotion/styled";
import tw from "tailwind.macro";

export const SectionContainer = styled.div`
    ${tw`flex justify-center items-center py-8`}
    ${props => (props?.isRow ? tw`flex-row` : tw`flex-col`)};
    ${props => (props?.isFirstBackground ? tw`bg-white` : tw`bg-mainvariant`)};
    ${props => (props?.isReverse ? (props?.isRow ? tw`flex-row-reverse` :tw`flex-col-reverse`) : null )};
    @media (max-width: 900px) {
        flex-direction: column;
    }
`

export const SectionText = tw.div`
    flex
    flex-col
    justify-center 
    items-center
    m-8
`

export const SectionTitle = styled.h4<{ isFirstBackground : boolean }>`
    ${
        tw`
            text-3xl
            font-indiecustom
            font-semibold
            h-auto
            text-center
            py-4
            border-b-4
        `
    };
    width: 90%;
    ${props => (props?.isFirstBackground ? tw`text-secondaryvariant` : tw`text-fourthvariant`)};
` 

export const SectionSubTitle = styled.h4`
    ${tw`
        text-xl
        font-semibold
        h-auto
        text-blue-800
        text-center
        py-4
        italic
    `}; 
    width: 90%;
`