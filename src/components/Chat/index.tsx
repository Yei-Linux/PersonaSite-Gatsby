import React, { Fragment, useContext } from "react"

import DynamicImage from "../DynamicImage"
import { useForm } from "react-hook-form"

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
  TextAlert
} from "./styledComponents"
import { sendOfferEmail } from "../../services/notificationService"
import { Email } from "../../models/email.model"

import ChatContext from "../../context/Chat/ChatContext";

interface Props {}

const Chat = ({}: Props) => {
  const { isChat ,setClickToChat } = useContext(ChatContext)
  const { register, handleSubmit, reset , errors } = useForm()

  const handleToggleChatButton = () => {
    setClickToChat();
  }

  const handleSendEmail = (data: any) => {
    let emailRequest = new Email();
    emailRequest.message=`Fullname:${data["fullName"]}-Email:${data["email"]}-Message${data["message"]}`;
    sendOfferEmail(emailRequest);

    reset({
      fullName: "",
      email:"",
      message:""
    }, {
      errors: true, 
      dirtyFields: true,
      isDirty: true, 
      isSubmitted: false,
      touched: false,
      isValid: false,
      submitCount: false,
    });
  }

  return (
    <Fragment>
      <ChatContainer isVisible={isChat}>
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

        <ChatBody onSubmit={handleSubmit(handleSendEmail)}>
          <InputField name="fullName" placeholder="Name" type="text" ref={register({ required: true })} />
          { errors.fullName && <TextAlert>FullName is required</TextAlert> }
          <InputField name="email" placeholder="Email" type="text" ref={register({ required: true })} />
          { errors.email && <TextAlert>Email is required</TextAlert> }
          <TextAreaField name="message" placeholder="How can i help?" ref={register({ required: true })} />
          { errors.message && <TextAlert>Message is required</TextAlert> }
          <Button type="submit">Send!</Button>
        </ChatBody>
      </ChatContainer>

      <ChatButton onClick={handleToggleChatButton}>
        <DynamicImage
          imageName={"chat-icon.png"}
          width={"3rem"}
          height={"3rem"}
          margin={"0"}
          borderRadius={"50%"}
          children={null}
        />
      </ChatButton>
    </Fragment>
  )
}

export default Chat
