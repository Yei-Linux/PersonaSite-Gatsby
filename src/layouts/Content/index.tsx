import React from 'react';

import { ContentContainer } from "./styledComponent";

interface Props {
    children : React.ReactNode
}
 
const Content = ({children} : Props) => {
    return (
        <ContentContainer>
            {children}
        </ContentContainer>
    );
}
 
export default Content;