import tw from "tailwind.macro"

export const HeaderContainer  = tw.div`
    fixed
    flex
    justify-start
    bg-gray-200
    w-full
    p-5
    z-50
    bg-transparentvariant
    justify-between
    flex-row-reverse
`

export const LogoContainer = tw.div`
    w-auto
    inline-block
`

export const HeaderItems = tw.ul`
    flex
    flex-end
`

export const HeaderItem = tw.li`
    mr-3
`

export const HeaderItemText = tw.a`
    inline-block
    py-1
    px-3
    border-b-4
    text-mainvariant
    font-semibold
    hover:cursor-pointer
`