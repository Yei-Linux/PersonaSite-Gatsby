import React from 'react';

import { LayoutContainer } from "./styledComponent";
import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";

interface Props {
    isPreFooter : boolean,
    children : React.ReactNode
}
 
const Layout = ({ children, isPreFooter } : Props )=> {
    return (
        <LayoutContainer>
            <Header />
            <Content>
                {children}
            </Content>
            <Footer isPreFooter={isPreFooter}/>
        </LayoutContainer>
    );
}
 
export default Layout;