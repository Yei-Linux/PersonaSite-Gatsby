import tw from "tailwind.macro";
import styled from "@emotion/styled";
import { FaFacebook, FaLinkedin, FaGithub, FaYoutube } from "react-icons/fa";

export const SocialNetworksContainer = styled.ul<{ backgroundColor : string }>`
    ${tw`flex justify-center items-center py-5`};
    background: ${(props) => props?.backgroundColor};
`
export const SocialItem = tw.a`
    inline-block
    mr-2
`
export const FacebookIcon = styled(FaFacebook)<{ iconColor : string }>`
    color: ${(props) => props?.iconColor};
`

export const LinkedinIcon = styled(FaLinkedin)<{ iconColor : string }>`
    color: ${(props) => props?.iconColor};
`

export const GithubIcon = styled(FaGithub)<{ iconColor : string }>`
    color: ${(props) => props?.iconColor};
`

export const YoutubeIcon = styled(FaYoutube)<{ iconColor : string }>`
    color: ${(props) => props?.iconColor};
`