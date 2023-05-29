import React, { useState } from 'react'
import styled from 'styled-components'
import CardsBack from '../src/components/cards_back/CardsBack'
import FinnOverlay from '../public/assets/card_back/bg_card_left.svg'
import BB8Overlay from '../public/assets/card_back/bg_card_right.svg'
import ReyOverlay from "../public/assets/card_front/bg_card_front.svg"
import Rey from "../public/assets/Character/rey.svg"
import Finn from '../public/assets/Character/finn.png'
import BB8 from '../public/assets/Character/bb8.png'


import CharacterInfo from '../src/components/cards_back/CharacterInfo/CharacterInfo'

const MainWrapper = styled.main`
    display: flex;
    justify-content: center;
    align-items: center;
    
`

const data = {
    rey: {
        name: 'Rey Skywalker',
        description:
          'Era uma catadora de sucata que descobriu ser sensível à Força durante sua busca ao lendário Mestre Jedi Luke Skywalker.',
        movies:
          'The Force Awakens, The Last Jedi, The Rise of Skywalker & Forces of Destiny',
        specie: 'Humana',
        height: '1,7m',
        local: 'Jakku',
        weapons: 'Sabre de luz, Blaster, Quarterstaff',
        imageOverlay: ReyOverlay,
        image: Rey,
      },
      finn: {
        name: 'Finn',
        description:
          'Comprometido com a causa da Resistência, Finn luta ao lado de seus amigos mais próximos na luta para derrotar a Primeira Ordem, o regime do mal que ele uma vez serviu como stormtrooper.',
        movies: 'The Force Awakens, The Last Jedi, The Rise of Skywalker',
        specie: 'Humana',
        height: '1,78m',
        local: 'Jakku, Crait, Canto Bight',
        weapons: 'Sabre de luz, Blaster, Quarterstaff',
        imageOverlay: FinnOverlay,
        image: Finn,
      },
      bb8: {
        name: 'BB-8',
        description:
          'Um astromecânico medroso mas leal, BB-8 acompanhou Poe Dameron em muitas missões para a Resistência, ajudando a manter seu X-wing em ordem de funcionamento.',
        movies:
          'The Force Awakens, The Last Jedi, The Rise of Skywalker & Forces of Destiny',
        specie: 'Droide Astromecânico',
        height: '0,67m',
        local: 'Planeta da resistência',
        weapons: 'Nenhuma',
        imageOverlay: BB8Overlay,
        image: BB8,
      },
}

export default function index() {
    const [active, setActive] = useState(data.bb8);

    function handleSelect() {
        
    }

    // console.log(active);

    const keys = Object.keys(data);
    // console.log(keys)



    return (
        <MainWrapper>
            <div><CardsBack card_dados={data.finn} /></div>

            <div>
                <CharacterInfo card_dados={active} />
            </div>

            <div><CardsBack card_dados={data.bb8} /></div>


            {
                keys.map((key) => {
                    const objeto = key;
                    return(
                        console.log(objeto)
                    )
                })
            }

        </MainWrapper>
    )
}
