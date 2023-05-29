import React from 'react'
import styled from 'styled-components'

const CharacterStyle = styled.main`

    --title: #ECE4EF;
    --description: #D8CEDE;
    --description-info: #9C83A7;

    background-image: url(${({ imagem }) => imagem});

    width: 43.6rem;
    height: 60.8rem;
    border-radius: 2rem;
    box-shadow: .0rem 29.4rem 11.8rem rgba(0, 0, 0, 0.03), .0rem 16.5rem 9.9rem 
                                rgba(0, 0, 0, 0.1), .0rem 7.3rem 7.3rem 
                                rgba(0, 0, 0, 0.17), .0rem 1.8rem 4.0rem 
                                rgba(0, 0, 0, 0.2), .0rem .0rem .0rem 
                                rgba(0, 0, 0, 0.2);

    padding: 4.8rem 12rem 6rem 4rem;

    position: relative;

    header{
        display: flex;
        flex-direction: column;
        gap: 1.6rem;
        width: 30rem;
        margin-bottom: 6rem;
    }

    header h2{
        font-weight: 700;
        font-size: 3.2rem;
        line-height: 4.0rem;
        letter-spacing: 0.08em;
        text-transform: uppercase;
        text-shadow: .0rem .0rem .8rem rgba(255, 255, 255, 0.4);
        align-self: stretch;
        color: var(--title);
    }

    header span{
        color: var(--description);
        font-size: 1.4rem;
        line-height: 1.8rem;
        max-width: 22rem;  
    }

    .Character{
        position: absolute;
        right: 0;
        bottom: 0;
    }

    main{
        display: flex;
        flex-direction: column;
        gap: 1.6rem;
        width: 20rem;
    }

    main span{
        color: var(--description-info);
        font-weight: 400;
        font-size: 1.4rem;
        line-height: 1.8rem;
        padding-bottom: .2rem;
    }

    main h4{
        color: var(--description);
        font-weight: 700;
        font-size: 1.4rem;
        line-height: 130%;
    }
`

export default function CharacterInfo({ card_dados }) {
    return (
        <CharacterStyle imagem={card_dados.imageOverlay.src}>
            <header>
                <h2>{card_dados.name}</h2>
                <span>{card_dados.description}</span>
            </header>
            <div className="Character">
                <img src={card_dados.image.src} alt={`imagem do personagem ${card_dados.name}`} />
            </div>
            <main>
                <div className="info">
                    <span>Filmes</span>
                    <h4>{card_dados.movies}</h4>
                </div>
                <div className="info">
                    <span>Espécie</span>
                    <h4>{card_dados.specie}</h4>
                </div>
                <div className="info">
                    <span>Altura</span>
                    <h4>{card_dados.height}</h4>
                </div>
                <div className="info">
                    <span>Localidade</span>
                    <h4>{card_dados.local}</h4>
                </div>
                <div className="info">
                    <span>Armas</span>
                    <h4>{card_dados.weapons}</h4>
                </div>
            </main>


        </CharacterStyle>
    )
}
