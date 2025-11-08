import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, Alert } from 'react-native';
import { collection, doc, setDoc, onSnapshot } from 'firebase/firestore';
import { firestore, auth } from '../services/firebase';
import ContactItem from '../components/ContactItem';

const RELATIONSHIP_TYPES = {
  FRIEND: { label: 'Друг', color: '#4CAF50', emoji: '😊' },
  FAMILY: { label: 'Семья', color: '#2196F3', emoji: '👨‍👩‍👧‍👦' },
  COLLEAGUE: { label: 'Коллега', color: '#FF9800', emoji: '💼' },
  NEUTRAL: { label: 'Нейтрально', color: '#9E9E9E', emoji: '😐' },
  CONFLICT: { label: 'Конфликт', color: '#F44336', emoji: '😠' }
};

export default function ContactsScreen({ navigation }) {
  const [contacts, setContacts] = useState([]);
  const user = auth.currentUser;

  // Временные демо-данные (позже заменим на реальные контакты)
  const demoContacts = [
    { id: '1', name: 'Иван Иванов', phone: '+79991234567' },
    { id: '2', name: 'Мария Петрова', phone: '+79997654321' },
    { id: '3', name: 'Алексей Сидоров', phone: '+79995556677' }
  ];

  useEffect(() => {
    if (!user) return;

    // Загрузка контактов из Firebase
    const contactsRef = collection(firestore, 'users', user.uid, 'contacts');
    const unsubscribe = onSnapshot(contactsRef, (snapshot) => {
      const contactsData = [];
      snapshot.forEach((doc) => {
        contactsData.push({ id: doc.id, ...doc.data() });
      });
      
      // Если контактов нет, используем демо-данные
      if (contactsData.length === 0) {
        setContacts(demoContacts);
      } else {
        setContacts(contactsData);
      }
    });

    return unsubscribe;
  }, [user]);

  const updateRelationship = async (contactId, relationship) => {
    try {
      const contactRef = doc(firestore, 'users', user.uid, 'contacts', contactId);
      await setDoc(contactRef, { 
        relationship,
        updatedAt: new Date() 
      }, { merge: true });
    } catch (error) {
      Alert.alert('Ошибка', 'Не удалось обновить отношение');
    }
  };

  return (
    <View style={{ flex: 1, padding: 10 }}>
      <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 10 }}>
        Мои контакты ({contacts.length})
      </Text>
      
      <FlatList
        data={contacts}
        renderItem={({ item }) => (
          <ContactItem 
            contact={item} 
            relationshipTypes={RELATIONSHIP_TYPES}
            onUpdateRelationship={updateRelationship}
          />
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}