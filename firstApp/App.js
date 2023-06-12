import { StyleSheet, Text, View } from 'react-native';
import Header from './components/Header';
import LoginButton from './components/LoginButton';
import Splash from './components/Splash';

export default function App() {
  return (
    <View style={{ flex: 1, backgroundColor: 'darkgreen' }}>
      <Header />
      <Splash />
      <LoginButton />
    </View>
  );
}
