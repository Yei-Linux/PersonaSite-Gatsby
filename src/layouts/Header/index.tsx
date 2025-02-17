import React from "react"
import {
  HeaderContainer,
  LogoContainer,
  HeaderItems,
  HeaderItem,
  HeaderItemText,
  BreakPoint,
} from "./styledComponent"

import DynamicImage from "../../components/DynamicImage";

interface Props {}

const Header = ({}: Props) => {
  const handleScrollPageByMenuItem = (e: any) => {
    let target: string = e.target.classList[0]
    let element = document.getElementById(target)
    if (element) {
      let targetOffset = element?.offsetTop
      window.scroll({
        top: targetOffset,
        left: 0,
        behavior: "smooth",
      })
    }
  }

  return (
    <HeaderContainer>
      <LogoContainer>
        <DynamicImage
            imageName={"mainlogo.png"}
            children={null}
            width={"40px"}
            height={"40px"}
            margin={"0"}
            borderRadius={"50%"}
        />
      </LogoContainer>

      <HeaderItems>
        <HeaderItem>
          <HeaderItemText
            className="aboutme"
            onClick={(e: any) => handleScrollPageByMenuItem(e)}
          >
            AboutMe
          </HeaderItemText>
        </HeaderItem>
        <BreakPoint>
          <HeaderItem>
            <HeaderItemText
              className="frontend"
              onClick={(e: any) => handleScrollPageByMenuItem(e)}
            >
              Frontend
          </HeaderItemText>
        </HeaderItem>
        </BreakPoint>
        <BreakPoint>
          <HeaderItem>
            <HeaderItemText
              className="backend"
              onClick={(e: any) => handleScrollPageByMenuItem(e)}
            >
              Backend
            </HeaderItemText>
          </HeaderItem>
        </BreakPoint>
        <HeaderItem>
          <HeaderItemText
            className="projects"
            onClick={(e: any) => handleScrollPageByMenuItem(e)}
          >
            Projects
          </HeaderItemText>
        </HeaderItem>
      </HeaderItems>
    </HeaderContainer>
  )
}

export default Header
