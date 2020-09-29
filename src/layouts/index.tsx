import React from 'react';

import { LayoutContainer } from "./styledComponent";
import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";

import Chat from "../components/Chat";

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
            <Chat />
            <Footer isPreFooter={isPreFooter}/>
        </LayoutContainer>
    );
}
 
export default Layout;