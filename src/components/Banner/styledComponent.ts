import tw from "tailwind.macro"
import styled from "@emotion/styled";

export const FlexContainer = tw.div`
    flex
    justify-center
    items-end
    flex-grow
    h-full
`

export const TextContainer = tw.div`
    flex
    flex-col
    justify-center
    items-center
`

export const MainTextBanner = tw.p`
    text-2xl
    font-semibold
    h-auto
    text-mainvariant
`

export const SecondaryTextBanner = styled.p`
    ${
        tw`
        text-xl
        font-medium
        h-auto
        `
    };
    @media (max-width: 600px) {
        display: none;
    }
` 

export const BaseStickContainer = tw.div`
    flex
    justify-center
`

export const BaseStickElement = styled.div`
    ${
        tw`
            h-48
            w-6
            bg-orange-500
        `
    };
    @media (max-width: 600px) {
        height: 13px;
    }
` 

export const WoodenSign = styled.div`
    ${
        tw`
            flex
            flex-col
            absolute
            bottom-0
        `
    }
    right: 28%;
`

export const TextPresentationContainer = tw.div`
    flex
    justify-center
    items-center
    p-6
    bg-gray-200
    rounded-lg
    shadow-xl
    mb-1
`

export const TextPresentation = tw.p`
    text-teal-700
    font-indiecustom
    font-bold
    text-center
    w-64
    text-2xl
`