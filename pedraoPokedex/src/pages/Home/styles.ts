import { Dimensions } from "react-native";
import styled, { css } from "styled-components/native";


const windowWidth = Dimensions.get('window').width

export const Container = styled.SafeAreaView`
    ${({theme}) => css`
        flex: 1;
        
    `}
`;

export const PokeballHeader = styled.ImageBackground`
    ${({theme}) => css`
        width: ${windowWidth}px;
        height: 220px;
        background-color: ${theme.colors.background}
    `}
`;

export const Title = styled.Text`
    
`;