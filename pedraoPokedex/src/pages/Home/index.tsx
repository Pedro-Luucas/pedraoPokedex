import React, { useEffect, useState } from 'react';
import { FlatList } from 'react-native';

import api from '../../service/api'
import * as S from './styles'
import { Card, Pokemon, PokemonType } from '../../components/Card';

import pokeballHeader from '../../assets/img/pokeball.png'
import { useNavigation } from '@react-navigation/native';



type Request = {
    id: number;
    types: PokemonType[]
}


export function Home() {

    const [pokemons, setPokemons] = useState<Pokemon[]>([]);

    const {navigate} = useNavigation()
    function handleNavigation(pokemonID: number){
        navigate('About', {
            pokemonID,
        })
    }

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
            setPokemons(payloadPokemons)
        }

        getAllPokemons()
    }, [])


    async function getMoreInfo(url: string) : Promise<Request>  {

        const response = await api.get(url)

        const {id, types} = response.data as Request;

        return {
            id, 
            types
        }
    }


    return (
        <S.Container>
            <FlatList
                ListHeaderComponent={
                    <>
                        <S.PokeballHeader source={pokeballHeader}/>
                        <S.Title>Pokédex do Pedrão</S.Title>
                    </>
                }
                data={pokemons}
                renderItem={({item: pokemon}) => (
                    <Card data={pokemon as Pokemon} onPress={() => {
                        handleNavigation(pokemon.id)
                    }

                    } />
                )}
                contentContainerStyle={{paddingHorizontal: 15}}
            />
                 
        </S.Container>
    )
}