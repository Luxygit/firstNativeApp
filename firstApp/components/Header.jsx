import { View, Text } from 'react-native';
import React from 'react';

export default function Header() {
  return (
    <View
      style={{
        height: '5%',
        marginTop: '10%',
        backgroundColor: 'black',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Text style={{ color: 'white' }}>This is the header</Text>
    </View>
  );
}
