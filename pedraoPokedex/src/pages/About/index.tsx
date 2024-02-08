import { useRoute, useNavigation } from '@react-navigation/native';
import { Text } from 'react-native';
import React, { useEffect, useState } from 'react';
import api from '../../service/api'
import { PokemonType } from '../../components/Card';


type RouteParams = {
    pokemonID: number
}

type Stats = {
    baseStat: number,
    stat: {
        id: number,
        name: string,
        url: string,
    };

}

type Abilities = {
    ability: {
        name: string,
        url: string
    },
    is_hidden: boolean,
    slot: number
}


type PokemonProps = {
    id: number, 
    name: string,
    stats: Stats[],
    abilities: Abilities[],
    types: PokemonType[]
}




export function About(){

    const route = useRoute()

    const {pokemonID} = route.params as RouteParams

    const [pokemon, setPokemon] = useState({} as PokemonProps)

    useEffect(() => {
        async function getPokemonInfo() {
            try {
                const response = await api.get(`/pokemon/${pokemonID}`)
                const {stats, abilities, id, name, types} = response.data
                const pokemonInfo: PokemonProps = {stats, abilities, id, name, types}

                console.log({stats, abilities, id, name, types})
                
                return pokemonInfo
                
            }
            catch(err){
                console.log('erro no ABOUT     ', err)

            }
        }
        getPokemonInfo().then((pokemonInfo) => {
            if (pokemonInfo) {
                setPokemon(pokemonInfo);
            }
        });


    })


    return(
        <Text>
            {pokemonID}
        </Text>
    )
}