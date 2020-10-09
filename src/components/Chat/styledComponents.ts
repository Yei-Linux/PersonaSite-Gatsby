import tw from "tailwind.macro"
import styled from "@emotion/styled"
import { keyframes } from "@emotion/core"

export const fadeInTopKeyframe = keyframes`
  from {
		opacity: 0;
		transform: translate3d(0, 50%, 0);
	}
	to {
		opacity: 1;
		transform: translate3d(0, 0, 0);
	}
`

export const fadeInDownKeyframe = keyframes`
  from {
		opacity: 1;
		transform: translate3d(0, 0, 0);
	}
	to {
		opacity: 0.5;
		transform: translate3d(0, 200%, 0);
	}
`

export const ChatContainer = styled.div<{ isVisible: boolean }>`
  ${tw`
            flex
            flex-col
            fixed
            rounded-lg
        `};
  animation: ${props =>
      props.isVisible ? fadeInTopKeyframe : fadeInDownKeyframe}
    0.5s ease-in both;
  right: 20px;
  width: 280px;
  z-index: 100;
  @media (min-width: 601px) {
    bottom: 95px;
  }
  @media (max-width: 600px) {
    bottom: 15px;
  }
`

export const ChatButton = styled.div`
  ${tw`
            flex
            justify-center
            items-center
            bg-black
            fixed
            rounded-full
        `};
  bottom: 10px;
  right: 20px;
  width: 70px;
  height: 70px;
  z-index: 100;
`

export const ChatHeader = tw.div`
    flex 
    flex-col
    justify-center
    items-center
    bg-black
`

export const TextHeader = tw.p`
    text-white
    font-semibold
    text-lg
    py-2
`

export const SubTextHeader = tw.p`
    text-gray-600
    font-semibold
    py-2
`

export const ChatBody = tw.form`
    flex
    flex-col
    justify-center
    items-center
    bg-white 
    shadow-md
    px-8 
    pt-6 
    pb-8
`

export const InputField = tw.input`
    shadow appearance-none border rounded w-full py-2 px-3 my-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline
`

export const TextAreaField = tw.textarea`
    shadow appearance-none border rounded w-full py-2 px-3 my-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline
`

export const Button = tw.button`
    bg-white hover:cursor-pointer hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow
`

export const TextAlert = tw.span`
  block
  w-full
  text-red-500     
  font-semibold
`
