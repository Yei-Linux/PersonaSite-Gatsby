import React from "react"
import {
  HeaderContainer,
  LogoContainer,
  HeaderItems,
  HeaderItem,
  HeaderItemText,
} from "./styledComponent";

interface Props {}

const Header = ({} : Props) => {
  return (
    <HeaderContainer>
      <LogoContainer></LogoContainer>

      <HeaderItems>
        <HeaderItem>
          <HeaderItemText>AboutMe</HeaderItemText>
        </HeaderItem>
        <HeaderItem>
          <HeaderItemText>Frontend Skills</HeaderItemText>
        </HeaderItem>
        <HeaderItem>
          <HeaderItemText>Backend Skills</HeaderItemText>
        </HeaderItem>
        <HeaderItem>
          <HeaderItemText>Projects</HeaderItemText>
        </HeaderItem>
      </HeaderItems>
    </HeaderContainer>
  )
}

export default Header
