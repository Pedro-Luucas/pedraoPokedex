import React, { useEffect, useState } from 'react';

import api from '../../service/api'
import * as S from './styles'
import { Card, Pokemon, PokemonType } from '../../components/Card';




type Request = {
    id: number;
    types: PokemonType[]
}


export function Home() {

    const [pokemons, setPokemons] = useState<Pokemon[]>([]);

    useEffect(() => {
        async function getAllPokemons(): Promise<void> {
            const response = await api.get('/pokemon')
            const { results } = response.data;

            const payloadPokemons : Pokemon[] = await Promise.all(
                results.map(async (pokemon : Pokemon) => {
                    const {id, types} = await getMoreInfo(pokemon.url)

                    return {
                        name: pokemon.name,
                        id,
                        url: pokemon.url, 
                        types
                    }
                })
            )
            console.log(payloadPokemons)
            setPokemons(payloadPokemons)
        }

        getAllPokemons()
    }, [])


    async function getMoreInfo(url: string) : Promise<Request>  {

        const response = await api.get(url)

        const {id, types} = response.data as Request;
        console.log(types)

        return {
            id, 
            types
        }
    }

    return (
        <S.Container>
            <S.FlatList
                data={pokemons}
                renderItem={({item: pokemon}) => (
                    <Card data={pokemon as Pokemon} />
                )}
                
            />
                 
        </S.Container>
    )
}