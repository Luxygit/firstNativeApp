import { View, Text, Button, Alert } from 'react-native';
import React from 'react';

export default function LoginButton() {
  return (
    <Button
      title='Login'
      onPress={() => {
        Alert.alert('Why u press me?');
      }}
    />
  );
}
