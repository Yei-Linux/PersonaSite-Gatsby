import styled from "@emotion/styled";
import BackgroundImage from "gatsby-background-image";

export const ImageBanner = styled(BackgroundImage)`
    height: ${props => props?.height};
    width: ${props => props?.width};
    margin: ${props => props?.margin};
    display: flex;
    justify-content: center;
    align-items: center;

    &:after {
        border-radius: ${props => props?.borderRadius};
    }
`;
