import React from "react";

import Layout from "../layouts";
import Banner from "../components/Banner";
import Section from "../components/Section";

const IndexPage = () => (
  <Layout>
    <Banner />
    <Section isRow={false} isFirstBackground={true} imagePath={"section2.jpg"}/>
  </Layout>
)

export default IndexPage
