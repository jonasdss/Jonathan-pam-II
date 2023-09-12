import * as React from 'react';
import {Text, View, StyleSheet } from 'react-native';
import Contador from './components/Contador';

export default function App() { // função com nome app que n possui argumento
  return(
    <View>
      <Contador />
    </View>
  );
}
