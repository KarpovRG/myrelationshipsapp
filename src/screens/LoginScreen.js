import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import { firebaseAuth } from '../services/firebase';

export default function LoginScreen() {
  const [phone, setPhone] = useState('');
  const [code, setCode] = useState('');
  const [confirmation, setConfirmation] = useState(null);

  const signIn = async () => {
    try {
      const confirmationResult = await firebaseAuth.signInWithPhoneNumber(phone);
      setConfirmation(confirmationResult);
      Alert.alert('Успех', 'Код отправлен на ваш телефон');
    } catch (error) {
      Alert.alert('Ошибка', error.message);
    }
  };

  const confirmCode = async () => {
    try {
      await confirmation.confirm(code);
    } catch (error) {
      Alert.alert('Ошибка', 'Неверный код');
    }
  };

  return (
    <View style={{ flex: 1, padding: 20, justifyContent: 'center' }}>
      <Text style={{ fontSize: 24, marginBottom: 20, textAlign: 'center' }}>
        Мои Взаимоотношения
      </Text>
      
      {!confirmation ? (
        <>
          <TextInput
            placeholder="+7 (XXX) XXX-XX-XX"
            value={phone}
            onChangeText={setPhone}
            style={{
              borderWidth: 1,
              borderColor: '#ccc',
              padding: 15,
              marginBottom: 10,
              borderRadius: 8
            }}
          />
          <TouchableOpacity
            onPress={signIn}
            style={{
              backgroundColor: '#007AFF',
              padding: 15,
              borderRadius: 8,
              alignItems: 'center'
            }}
          >
            <Text style={{ color: 'white', fontSize: 16 }}>Получить код</Text>
          </TouchableOpacity>
        </>
      ) : (
        <>
          <TextInput
            placeholder="Введите код из SMS"
            value={code}
            onChangeText={setCode}
            style={{
              borderWidth: 1,
              borderColor: '#ccc',
              padding: 15,
              marginBottom: 10,
              borderRadius: 8
            }}
          />
          <TouchableOpacity
            onPress={confirmCode}
            style={{
              backgroundColor: '#007AFF',
              padding: 15,
              borderRadius: 8,
              alignItems: 'center'
            }}
          >
            <Text style={{ color: 'white', fontSize: 16 }}>Войти</Text>
          </TouchableOpacity>
        </>
      )}
    </View>
  );
}