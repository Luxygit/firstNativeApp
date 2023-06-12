import { View, Text, Image } from 'react-native';
import React from 'react';

export default function Splash() {
  return (
    <View style={{ alignItems: 'center' }}>
      <Image
        source={require('../assets/HLlogo.jpg')}
        style={{ width: 200, height: 200 }}
      />
    </View>
  );
}
