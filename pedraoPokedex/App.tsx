import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { ThemeProvider } from 'styled-components';

import theme from './src/global/styles/theme';

import { Welcome } from './src/pages/Welcome';
import { Home } from './src/pages/Home'

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Home/>
    </ThemeProvider>
  );
}
