import React from "react";

import AnimatedLottieView from 'lottie-react-native';
import rowletAnimation from './rowletAnimation.json'

import { Button } from "../../components/Button";


import * as S from './styles'

export function Welcome() {
    return (
    <S.Container>
        <S.Content>
            <AnimatedLottieView autoPlay source={rowletAnimation} loop style={{width: "100%", height: "100%"}} />
        </S.Content>
        <S.Footer>
            <S.Title>POKEDEX DO PEDRÃO</S.Title>
            <S.SubTitle>typescript HAHAHHAHAHAHHAHAHHAHAHAHAH</S.SubTitle>
            <Button title="Iniciar"></Button>
        </S.Footer>
    </S.Container>
)}