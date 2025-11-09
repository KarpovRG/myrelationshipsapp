import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { firebaseAuth } from '../services/firebase';

export default function HomeScreen() {
  const signOut = () => {
    firebaseAuth.signOut();
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 24, marginBottom: 20 }}>Вы вошли!</Text>
      <TouchableOpacity
        onPress={signOut}
        style={{
          backgroundColor: '#DC3545',
          padding: 15,
          borderRadius: 8,
          alignItems: 'center'
        }}
      >
        <Text style={{ color: 'white', fontSize: 16 }}>Выйти</Text>
      </TouchableOpacity>
    </View>
  );
}
