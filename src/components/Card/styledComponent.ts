import styled from "@emotion/styled"
import tw from "tailwind.macro"

export const CardContainer = styled.div`
  background-color: white;
  max-width: 360px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  border-radius: 2rem;
  -webkit-box-shadow: 0px 0px 23px -5px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 0px 23px -5px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 23px -5px rgba(0, 0, 0, 0.75);
`

export const TitleContainer = tw.h4`
  text-xl
  text-center
  font-bold
  p-4
  text-mainvariant
`

export const SubtitleContainer = tw.p`
  text-center
  p-4
`

export const ActionsContainer = styled.div`
  padding: 0 padding-size 1.2rem;
  display: flex;
  flex-direction: column;
  order: 99;
`

export const InfoContainer = styled.div`
  padding: 0 0 1rem;
  display: flex;
`

export const IconCard = styled.div`
  width: 8rem;
  height: 8rem;
  margin: auto;
  border-radius: 50%;
  background-color: white;
  box-shadow: 0 0.5rem 1rem rgba(black, 0.3);
  transform: translateY(-50%);
  transition: transform 200ms cubic-bezier(0.18, 0.89, 0.32, 1.28);
  &:hover {
    transform: translateY(-40%) scale(1.1);
  }
`

export const InfoButton = styled.button`
  color: #7510f7;
  font-weight: bold;
  width: 70%;
  max-width: 240px;
  border: 2px solid #7510f7;
  margin: 0px auto;
  padding: 1rem;
  outline: none;
  box-sizing: border-box;
  border-radius: 1.5rem / 50%;
  transition: background-color 100ms ease-in-out,
    transform 200ms cubic-bezier(0.18, 0.89, 0.32, 1.28);
  &:hover {
    background-color: #7510f7;
    color: white;
    transform: scale(1.1);
  }
  &:active {
    background-color: #7510f7;
    transform: scale(1);
  }
`

export const TextContainer = styled.div`
  padding: 10px;
  margin-top: -40px;
`
