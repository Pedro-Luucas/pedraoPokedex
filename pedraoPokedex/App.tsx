import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { ThemeProvider } from 'styled-components';

import { Routes } from './src/routes'

import theme from './src/global/styles/theme';



export default function App() {

  return (
    <ThemeProvider theme={theme}>
      <Routes/>
    </ThemeProvider>
  );
}
