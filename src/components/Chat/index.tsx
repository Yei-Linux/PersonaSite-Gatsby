import React, { Fragment, useState } from "react"

import DynamicImage from "../DynamicImage"

import {
  ChatButton,
  ChatContainer,
  ChatHeader,
  TextHeader,
  SubTextHeader,
  ChatBody,
  InputField,
  TextAreaField,
  Button,
} from "./styledComponents"

interface Props {}

const Chat = ({}: Props) => {
    const [toggleState,setToggleButtonState] = useState(false);

    const handleToggleChatButton = () =>{
        setToggleButtonState(!toggleState);
    }

  return (
    <Fragment>
      <ChatContainer isVisible={toggleState}>
        <ChatHeader>
          <TextHeader>Message me</TextHeader>
          <DynamicImage
            imageName={"profile.png"}
            width={"6rem"}
            height={"6rem"}
            margin={"0"}
            borderRadius={"50%"}
            children={null}
          />
          <TextHeader>Hi!</TextHeader>
          <SubTextHeader>I'll get back to you shortly</SubTextHeader>
        </ChatHeader>

        <ChatBody>
          <InputField placeholder="Name" type="text" />
          <InputField placeholder="Subject" type="text" />
          <InputField placeholder="Email" type="email" />
          <TextAreaField placeholder="How can i help?" />
          <Button>Send!</Button>
        </ChatBody>
      </ChatContainer>

      <ChatButton onClick={handleToggleChatButton}></ChatButton>
    </Fragment>
  )
}

export default Chat
