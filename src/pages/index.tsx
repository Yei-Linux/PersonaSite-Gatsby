import React from "react"

import Layout from "../layouts"
import Banner from "../components/Banner"
import Section from "../components/Section"

import Potion from "../components/Potion"

const IndexPage = () => (
  <Layout isPreFooter={true}>
    <Banner />

    <Section
      isRow={false}
      isFirstBackground={true}
      imagePath={"section2.jpg"}
      isReverse={false}
      borderRadius={"2.5em"}
      sectionTitle={"Let me introduce myself"}
    >
      I'm a FullStack Developer based in Lima, Peru. I have a passion for
      programming and helping others.
    </Section>
    <Section
      isRow={true}
      isFirstBackground={false}
      imagePath={"section3.png"}
      isReverse={true}
      borderRadius={"9.5em"}
      sectionTitle={"My Frontend Skills"}
    >
      These are my main skills:
      <Potion
        potionTitle={"ReactJS"}
        potionColor={"#da0000"}
        potionBubbleColor={"#bf0303"}
        potionHeight={"70%"}
      />
    </Section>
    <Section
      isRow={true}
      isFirstBackground={true}
      imagePath={"section2.jpg"}
      isReverse={false}
      borderRadius={"2.5em"}
      sectionTitle={"My Backend Skills"}
    >
      These are my main skills:
      <Potion
        potionTitle={"NodeJS"}
        potionColor={"#d789d7"}
        potionBubbleColor={"#9d65c9"}
        potionHeight={"75%"}
      />
    </Section>
  </Layout>
)

export default IndexPage
