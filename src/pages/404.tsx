import React from "react"

import Layout from "../layouts"
import DynamicImage from "../components/DynamicImage"
import GifNotFound from "../images/404.gif";

import SEO from "../layouts/SEO";

import { NotFoundContainer } from "../styles/styleComponents";

const NotFoundPage = () => (
  <Layout isPreFooter={true}>
      <SEO title="404 not found" />
      <NotFoundContainer>
        <DynamicImage
            imageName={""}
            width={"100%"}
            height={"97vh"}
            margin={"auto"}
            borderRadius={"0"}
            backgroundSize={"100% 110%"}
            isGif={true}
            gifPath={GifNotFound}
            children={null}
        />
      </NotFoundContainer>
  </Layout>
)

export default NotFoundPage
