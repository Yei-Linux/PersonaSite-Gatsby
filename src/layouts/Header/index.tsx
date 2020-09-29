import React from "react"
import {
  HeaderContainer,
  LogoContainer,
  HeaderItems,
  HeaderItem,
  HeaderItemText,
} from "./styledComponent"

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
      <LogoContainer></LogoContainer>

      <HeaderItems>
        <HeaderItem>
          <HeaderItemText
            className="aboutme"
            onClick={(e: any) => handleScrollPageByMenuItem(e)}
          >
            AboutMe
          </HeaderItemText>
        </HeaderItem>
        <HeaderItem>
          <HeaderItemText
            className="frontend"
            onClick={(e: any) => handleScrollPageByMenuItem(e)}
          >
            Frontend
          </HeaderItemText>
        </HeaderItem>
        <HeaderItem>
          <HeaderItemText
            className="backend"
            onClick={(e: any) => handleScrollPageByMenuItem(e)}
          >
            Backend
          </HeaderItemText>
        </HeaderItem>
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
