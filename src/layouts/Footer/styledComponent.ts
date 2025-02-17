import tw from "tailwind.macro";
import styled from "@emotion/styled";

import { InfoButton } from "../../components/Card/styledComponent";

export const FooterContainer = tw.div`
    flex
    flex-col
    flex-grow
    bg-mainvariant
    items-center
    mt-64
`

export const PreFooter = styled.div`
    ${tw`
        flex
        w-fit
        justify-center
        items-center
        flex-grow
        rounded-lg
        bg-darkvariant
        text-white
    `};
    padding: 30px 60px;
    margin-bottom: 50px;
    margin-top: -70px;
    margin-left: 10px;
    margin-right: 10px;
    @media (max-width: 800px) {
        flex-direction: column;
    }
`  

export const PreFooterTitle = styled.p`
    ${tw`
        font-condensed
        font-ptsans
        font-indiecustom
        text-3xl
        max-w-90
        h-auto
        text-center
    `};
  @media (min-width: 601px) {
    margin-right: 2.5rem;
  }
  @media (max-width: 600px) {
    margin-right: 0px;
  }
`

export const PreFooterButton = styled(InfoButton)`
    margin: 0px !important;
`

export const FooterContent = tw.footer`
    flex
    flex-col
    items-center
    justify-center
    p-6
`

export const FooterText = tw.p`
    font-condensed
    font-ptsans
    w-auto
    h-auto
    text-white
    py-2
`

export const FooterSubtext = tw.p`
    font-condensed
    font-ptsans
    text-white
    text-xs
    py-2
`

export const FooterInformation = tw.p`
    text-2xl
    text-center
    font-semibold
    font-condensed
    font-ptsans
    w-auto
    h-auto
    text-white
    py-2
`