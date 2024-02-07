import React from "react";
import { TouchableOpacityProps } from "react-native";

import * as S from './style'


type Props = {
    title: string;
} & TouchableOpacityProps


export function Button({title, ...rest}: Props){
    return (
        <S.Container {...rest as TouchableOpacityProps}>
            <S.Title>{title}</S.Title>
        </S.Container>
    )
}