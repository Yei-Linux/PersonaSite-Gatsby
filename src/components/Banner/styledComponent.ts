import tw from "tailwind.macro"
import styled from "@emotion/styled";

export const FlexContainer = tw.div`
    flex
    justify-start
    items-center
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

export const SecondaryTextBanner = tw.p`
    text-xl
    font-medium
    h-auto
`

export const BaseStickContainer = tw.div`
    flex
    justify-center
`

export const BaseStickElement = tw.div`
    h-48
    w-6
    bg-orange-500
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