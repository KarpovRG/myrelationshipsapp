import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import ContactList from '../components/ContactList';
import { logOut } from '../services/auth';

const ContactsScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome!</Text>
      <Button title="Log Out" onPress={logOut} />
      <ContactList />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 16,
  },
});

export default ContactsScreen;