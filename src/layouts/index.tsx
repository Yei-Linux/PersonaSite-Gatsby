import React from 'react';

import { LayoutContainer } from "./styledComponent";
import Header from "./Header";
import Content from "./Content";

interface Props {
    children : React.ReactNode
}
 
const Layout = ({ children } : Props )=> {
    return (
        <LayoutContainer>
            <Header />
            <Content>
                {children}
            </Content>
        </LayoutContainer>
    );
}
 
export default Layout;