import React from 'react'
import styled from 'styled-components'

const CardsBackStyle = styled.section`
    width: 34.8rem;
    height: 48.64rem;

    box-shadow: .0rem 11.3rem 4.5rem rgba(0, 0, 0, 0.02), .0rem 6.4rem 3.8rem rgba(0, 0, 0, 0.08), .0rem 2.8rem 2.8rem rgba(0, 0, 0, 0.13), .0rem .7rem 1.6rem rgba(0, 0, 0, 0.15), .0rem .0rem .0rem rgba(0, 0, 0, 0.15);
    border-radius: 1.6rem;
    color: #312D74;

    background-image: url(${({imagem}) => imagem});

    display: flex;
    justify-content: center;
    align-items: center;

    h1{
        font-weight: 700;
        font-size: 3.2rem;
        line-height: 4.0rem;
        letter-spacing: 0.08em;
        text-transform: uppercase;
        opacity: 0.9;

        -webkit-text-stroke: .1rem;
        -webkit-text-fill-color: transparent;
    }
`;

export default function CardsBack({card_dados}) {

    return (
        <CardsBackStyle imagem={card_dados.imageOverlay.src}>
            <h1>{card_dados.name}</h1>
        </CardsBackStyle>
    )
}
