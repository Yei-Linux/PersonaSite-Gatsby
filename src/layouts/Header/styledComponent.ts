import tw from "tailwind.macro"

export const HeaderContainer  = tw.div`
    fixed
    flex
    justify-between
    bg-gray-200
    w-full
    p-5
    z-50
    bg-transparentvariant
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