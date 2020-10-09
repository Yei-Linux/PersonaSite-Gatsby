import React, { Fragment } from "react"

import { LayoutContainer } from "./styledComponent"
import Header from "./Header"
import Content from "./Content"
import Footer from "./Footer"

import Chat from "../components/Chat"
import ChatState from "../context/Chat/ChatState"

import SEO from "./SEO";

interface Props {
  isPreFooter: boolean
  children: React.ReactNode
}

const Layout = ({ children, isPreFooter }: Props) => {
  return (
    <Fragment>
      <SEO title="Yei Linux" />
      <ChatState>
        <LayoutContainer>
          <Header />
          <Content>{children}</Content>
          <Chat />
          <Footer isPreFooter={isPreFooter} />
        </LayoutContainer>
      </ChatState>
    </Fragment>
  )
}

export default Layout
