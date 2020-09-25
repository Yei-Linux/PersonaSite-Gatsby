import React from 'react';
import SocialNetworks from "../../components/SocialNetworks";

import { FooterContainer, PreFooter, FooterContent, PreFooterTitle, PreFooterSubTitle, FooterText } from "./styledComponent";

interface Props {
    isPreFooter : boolean
}
 
const Footer = ({ isPreFooter } : Props) => {
    return (
        <FooterContainer>
            {
                isPreFooter && <PreFooter>
                    <PreFooterTitle>I occasionally take on freelance opportunities.</PreFooterTitle>
                    <PreFooterSubTitle>Have an exciting project you need some help? Send me over an email, and let's chat.</PreFooterSubTitle>
                </PreFooter>
            }
            
            <SocialNetworks color="#fff" backgroundColor={"#407088"}/>
            <FooterContent>
                <FooterText>YeiLinux-All rights reserved</FooterText>
            </FooterContent>
        </FooterContainer>
    );
}
 
export default Footer;