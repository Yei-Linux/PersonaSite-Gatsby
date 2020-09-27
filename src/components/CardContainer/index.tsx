import React from "react"

import Card from "../Card"
import { CardsContainer } from "./styledComponent"

interface Props {
  cards: any[]
}

const CardContainer = ({ cards }: Props) => {
  return (
    <CardsContainer>
      {cards.map((card: any) => (
        <Card
          imagePath={card.imagePath}
          iconPath={card.iconPath}
          title={card.title}
          subtitle={card.subtitle}
        />
      ))}
    </CardsContainer>
  )
}

export default CardContainer
