import styled from "@emotion/styled";

export const CardsContainer = styled.div`
    display: grid;
    grid-gap: 2rem;
    gap: 2rem;
    grid-template-columns: repeat(3,minmax(0,1fr));

    @media (max-width: 1200px) {
        grid-template-columns: repeat(2,minmax(0,1fr));
    }
    
    @media (max-width: 839px) {
        grid-template-columns: repeat(1,minmax(0,1fr));
    }
`

