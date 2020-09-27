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
    rounded-full 
    h-16 w-16 
    flex 
    items-center 
    justify-center
    border-4
    border-solid 
    border-ocendark
`
export const FacebookIcon = styled(FaFacebook)<{ iconColor : string }>`
    color: #2667ff;
`

export const LinkedinIcon = styled(FaLinkedin)<{ iconColor : string }>`
    color: #3e92cc;
`

export const GithubIcon = styled(FaGithub)<{ iconColor : string }>`
    color: #4d6a6d;
`

export const YoutubeIcon = styled(FaYoutube)<{ iconColor : string }>`
    color: #da1e37;
`