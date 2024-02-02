import styled, { css } from "styled-components/native";

export const Container = styled.SafeAreaView`
    ${({theme}) => css`
        flex: 1;
        
    `}
`;

export const FlatList = styled.FlatList`
    padding: 10px;
`;