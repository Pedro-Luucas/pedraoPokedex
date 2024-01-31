import styled, { css } from "styled-components/native";

export const Container = styled.View`
    ${({theme}) => css`
        flex: 1;
        background-color: ${theme.colors.backgroundTypes.grass};
    `}
`;


export const Content = styled.View`
    height: 70%;
`;


export const Footer = styled.View`
    ${({theme}) => css`
        justify-content: center;
        align-items: center;
        border-top-right-radius: 20px;
        border-top-left-radius: 20px;
        height: 30%;
        padding: 10px;

        background-color: ${theme.colors.background};
    `}
`;

export const Title = styled.Text`
    ${({theme}) => css`
        font-size: 25px;
        color: ${theme.colors.textBlack};
    `}
`;

export const SubTitle = styled.Text`
    ${({theme}) => css`
        font-size: 16px;
        margin-top: 10px;
        margin-bottom: 10px;
        color: ${theme.colors.textBlack};
    `}
`;