import styled from "@emotion/styled";

import BackgroundImage from "gatsby-background-image";

export const ImageBanner = styled(BackgroundImage)<{backgroundSize : string,borderRadius: string,height: string,width: string,margin: string}>`
    height: ${props => props?.height};
    width: ${props => props?.width};
    margin: ${props => props?.margin};
    display: flex;
    justify-content: center;
    align-items: center;
    background-size: ${props => props?.backgroundSize} !important;

    &:after {
        border-radius: ${props => props?.borderRadius};
    }
`;

export const GifBanner = styled.div<{backgroundSize : string,borderRadius: string,height: string,width: string,margin: string,urlGif: string}>`
    height: ${props => props?.height};
    width: ${props => props?.width};
    margin: ${props => props?.margin};
    display: flex;
    justify-content: center;
    align-items: center;
    background-size: ${props => props?.backgroundSize} !important;
    background-image: url(${props => props.urlGif});

    &:after {
        border-radius: ${props => props?.borderRadius};
    }
`;


