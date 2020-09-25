import tw from "tailwind.macro";

export const FooterContainer = tw.div`
    flex
    flex-col
    flex-grow
`

export const PreFooter = tw.div`
    flex
    flex-col
    justify-center
    items-center
    flex-grow
    py-6
    min-h-screen-80
`

export const PreFooterTitle = tw.p`
    text-3xl
    font-bold
    w-90
    h-auto
    text-center
`

export const PreFooterSubTitle = tw.p`
    text-base
    font-semibold
    h-auto
    py-6
`

export const FooterContent = tw.footer`
    flex
    justify-center
    bg-indigo-200
    p-5
`

export const FooterText = tw.p`
    text-base
    font-semibold
    w-auto
    h-auto
`