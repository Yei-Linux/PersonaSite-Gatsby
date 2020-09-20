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
          <HeaderItemText>About</HeaderItemText>
        </HeaderItem>
        <HeaderItem>
          <HeaderItemText>Projects</HeaderItemText>
        </HeaderItem>
        <HeaderItem>
          <HeaderItemText>Notes</HeaderItemText>
        </HeaderItem>
      </HeaderItems>
    </HeaderContainer>
  )
}

export default Header
