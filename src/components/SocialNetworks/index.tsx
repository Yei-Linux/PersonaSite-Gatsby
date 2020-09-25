import React from "react"

import {
  SocialNetworksContainer,
  SocialItem,
  FacebookIcon,
  LinkedinIcon,
  GithubIcon,
  YoutubeIcon
} from "./styledComponents"

interface Props {
    color : string,
    backgroundColor : string
}

const SocialNetworks = ({ color, backgroundColor }: Props) => {
  return (
    <SocialNetworksContainer backgroundColor={backgroundColor}>
      <SocialItem href={"https://github.com/Yei-Linux"} target={"__blank"}>
        <GithubIcon iconColor={color}/>
      </SocialItem>
      <SocialItem href={"https://www.linkedin.com/in/cesar-jesus-alberto-alvan-huarcaya-0a6584194/"} target={"__blank"}>
        <LinkedinIcon iconColor={color}/>
      </SocialItem>
      <SocialItem href={"https://www.youtube.com/channel/UCREDjwC4KYdL-m3aQ3LpA6w?view_as=subscriber"} target={"__blank"}>
        <YoutubeIcon iconColor={color}/>
      </SocialItem>
      <SocialItem href={"https://www.facebook.com/jesus.alvan.1/"} target={"__blank"}>
        <FacebookIcon iconColor={color}/>
      </SocialItem>
    </SocialNetworksContainer>
  )
}

export default SocialNetworks
