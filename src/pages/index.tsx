import React from "react"

import Layout from "../layouts"
import Banner from "../components/Banner"
import Section from "../components/Section"
import SocialNetworks from "../components/SocialNetworks";
import CardContainer from "../components/CardContainer";

import Potion from "../components/Potion"

import { PotionsContainer, WorkProjectsContainer, TextContainer, TextSubtitle, TextTitle, Fixative } from "../styles/styleComponents";

import { backEndSkills, dataBaseSkills, frontEndSkills, otherSkills, workProjects } from "../mocks";

const IndexPage = () => (
  <Layout isPreFooter={true}>
    <Banner />

    <Fixative id={"aboutme"}  marginBottomStyle="30px"/>
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
      <SocialNetworks color={"#7510F7"} backgroundColor={"#fff"}/>
    </Section>

    <Fixative id={"frontend"}  marginBottomStyle="0px"/>
    <Section
      isRow={true}
      isFirstBackground={false}
      imagePath={"section3.png"}
      isReverse={true}
      borderRadius={"9.5em"}
      sectionTitle={"My Frontend Skills"}
    >
      These are my main skills:
      <PotionsContainer>
        {
          frontEndSkills.map((skill : any) => (
            <Potion
              potionTitle={skill["languaje"]}
              potionColor={skill["color"]}
              potionBubbleColor={skill["bubbleColor"]}
              potionHeight={skill["percent"]}
            />
          ))
        }
      </PotionsContainer>
    </Section>

    <Fixative id={"backend"}  marginBottomStyle="0px"/>
    <Section
      isRow={true}
      isFirstBackground={true}
      imagePath={"section2.jpg"}
      isReverse={false}
      borderRadius={"2.5em"}
      sectionTitle={"My Backend Skills"}
    >
      These are my main skills:
      <PotionsContainer>
        {
          backEndSkills.map((skill : any) => (
            <Potion
              potionTitle={skill["languaje"]}
              potionColor={skill["color"]}
              potionBubbleColor={skill["bubbleColor"]}
              potionHeight={skill["percent"]}
            />
          ))
        }
      </PotionsContainer>
    </Section>
    <Section
      isRow={true}
      isFirstBackground={false}
      imagePath={"section3.png"}
      isReverse={true}
      borderRadius={"9.5em"}
      sectionTitle={"My Database Skills"}
    >
      These are my main skills:
      <PotionsContainer>
        {
          dataBaseSkills.map((skill : any) => (
            <Potion
              potionTitle={skill["languaje"]}
              potionColor={skill["color"]}
              potionBubbleColor={skill["bubbleColor"]}
              potionHeight={skill["percent"]}
            />
          ))
        }
      </PotionsContainer>
    </Section>
    <Section
      isRow={true}
      isFirstBackground={true}
      imagePath={"section2.jpg"}
      isReverse={false}
      borderRadius={"2.5em"}
      sectionTitle={"My Extra Skills"}
    >
      These are my main skills:
      <PotionsContainer>
        {
          otherSkills.map((skill : any) => (
            <Potion
              potionTitle={skill["languaje"]}
              potionColor={skill["color"]}
              potionBubbleColor={skill["bubbleColor"]}
              potionHeight={skill["percent"]}
            />
          ))
        }
      </PotionsContainer>
    </Section>
    
    <Fixative id={"projects"} marginBottomStyle="40px"/>
    <WorkProjectsContainer>
      <TextContainer>
        <TextTitle>My Recent Work</TextTitle>
        <TextSubtitle>Here are few projects I've worked on recently. Want to see more?</TextSubtitle>
      </TextContainer>

       <CardContainer cards={workProjects} />
    </WorkProjectsContainer>

  </Layout>
)

export default IndexPage
