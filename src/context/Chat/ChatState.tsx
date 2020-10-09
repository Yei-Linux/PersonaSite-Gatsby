import React, { useReducer } from "react"
import ChatContext from "./ChatContext"
import chatReducer from "./ChatReducer"

import { IS_OPEN_CHAT } from "../types"

function ChatState(props: any) {
  const initialState = {
    isChat: true
  }

  const [state, dispatch]: any = useReducer<any>(chatReducer, initialState)

  const setClickToChat = () => {
    dispatch({
      type: IS_OPEN_CHAT,
    })
  }

  return (
    <ChatContext.Provider
      value={{
        isChat: state.isChat,
        setClickToChat,
      }}
    >
        {props.children}
    </ChatContext.Provider>
  )
}

export default ChatState
