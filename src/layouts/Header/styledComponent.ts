import tw from "tailwind.macro"

export const HeaderContainer  = tw.div`
    fixed
    flex
    justify-between
    bg-gray-200
    w-full
    p-5
    z-50
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
    border
    bg-yellow-600
    border-yellow-500
    rounded
    text-blue-100
    py-1
    px-3
    hover:border-yellow-600
    hover:bg-yellow-700
    hover:cursor-pointer
`