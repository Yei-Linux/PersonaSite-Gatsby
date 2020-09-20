import tw from "tailwind.macro"

export const FlexContainer = tw.div`
    flex
    justify-around
    items-center
    flex-grow
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
`

export const SecondaryTextBanner = tw.p`
    text-xl
    font-medium
    h-auto
`