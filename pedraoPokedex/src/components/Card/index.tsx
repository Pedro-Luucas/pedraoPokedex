import React from 'react';
import dotsImage from '../../assets/img/dots.png'
import pokeball from '../../assets/img/pokeballCard.png'
import * as S from './style'
import { TouchableOpacityProps } from 'react-native';

export type PokemonType = {
    type: {
      name: string;
      url?: string;
    };
  };

export type Pokemon = {
    name: string
    url: string
    id: number
    types: PokemonType[]
}


type Props = {
    data: Pokemon
} & TouchableOpacityProps


export function Card({data, ...rest}: Props) {

    return(
    <S.PokemonCard type={data.types[0].type.name} {...rest  as TouchableOpacityProps}>

        <S.LeftSide>
            <S.ID>#{data.id}</S.ID>
            <S.Name>{data.name}</S.Name>
            <S.ImageCardDetailLeft source={dotsImage}/>

            <S.TypeContent>
                {data.types.map(pokemonType => 
                <S.Type type={pokemonType.type.name}>
                    <S.TypeText key={pokemonType.type.name}>{pokemonType.type.name}</S.TypeText>
                </S.Type>)}
            </S.TypeContent>

        </S.LeftSide>

        <S.RightSide>
            <S.PokeballDetail source={pokeball} />
            <S.PokemonImage source={{
               uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${data.id}.png`
            }}>
            </S.PokemonImage>
        </S.RightSide>

    </S.PokemonCard>
)}

