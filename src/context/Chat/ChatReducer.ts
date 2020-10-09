import { IS_OPEN_CHAT } from "../types";

export default (state : any, action : any) => {
  switch (action.type) {
    case IS_OPEN_CHAT:
      return {
        ...state,
        isChat: !state.isChat
      };
    default:
      return state;
  }
};