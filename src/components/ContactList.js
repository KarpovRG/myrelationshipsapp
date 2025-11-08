import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ContactList = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your Contacts</Text>
      {/* Contact items will go here */}
      <Text>Your contact list is empty.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 24,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
  },
});

export default ContactList;
