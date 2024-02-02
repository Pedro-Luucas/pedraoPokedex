import styled, { css } from "styled-components/native";

type PokemonType = {
    type: string
}

export const PokemonCard = styled.TouchableOpacity<PokemonType>`
    ${({theme, type}) => css`
        background-color: ${theme.colors.backgroundTypes[type]};
        border-radius: 10px;
        margin-top: 30px;
        flex-direction: row;
        padding: 20px;
    `}
`;

export const LeftSide = styled.View`
    width: 50%;
    position: relative;
`;

export const ID = styled.Text`
    ${({theme}) => css`
        font-weight: bold;
        font-size: 12px;
        line-height: 14px;
        color: ${theme.colors.textLight};
    `}
`;

export const Name = styled.Text`
    ${({theme}) => css`
        font-weight: bold;
        font-size: 25px;
        line-height: 31px;
        margin-top: 5px;
        text-transform: capitalize;
        color: ${theme.colors.textWhite};
    `}
`;

export const ImageCardDetailLeft = styled.Image`
    position: absolute;
    width: 74px;
    height: 32px;
    left: 90px;
    top: -10px;
`


export const TypeContent = styled.View`
    flex-direction: row;
`;

export const Type = styled.View<PokemonType>`
  ${({ theme, type }) => css`
    padding: 5px;
    width: 65px;
    height: 25px;
    background: ${theme.colors.types[type]};
    border-radius: 3px;
    margin-left: 5px;
    margin-top: 5px;
    justify-content: center;
    align-items: center;
  `}
`;

export const TypeText = styled.Text`
    ${({theme}) => css`
        font-weight: 500;
        font-size: 12px;
        line-height: 14px;
        text-transform: capitalize;
        color: ${theme.colors.textWhite};
    `}
`;

export const RightSide = styled.View`
  justify-content: center;
  align-items: center;
  width: 50%;
  position: relative;
`;

export const PokemonImage = styled.Image`
  margin-top: -40px;
  width: 130px;
  height: 130px;
`;

export const PokeballDetail = styled.Image`
  position: absolute;
  right: -20px;
`;