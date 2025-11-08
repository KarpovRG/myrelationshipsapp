import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

export default function ContactItem({ contact, relationshipTypes, onUpdateRelationship }) {
  const currentStatus = relationshipTypes[contact.relationship] || relationshipTypes.NEUTRAL;

  return (
    <View style={{
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: 15,
      borderBottomWidth: 1,
      borderBottomColor: '#f0f0f0'
    }}>
      <View>
        <Text style={{ fontSize: 16, fontWeight: 'bold' }}>
          {contact.name}
        </Text>
        <Text style={{ color: '#666' }}>{contact.phone}</Text>
      </View>

      <View style={{ flexDirection: 'row' }}>
        {Object.entries(relationshipTypes).map(([key, type]) => (
          <TouchableOpacity
            key={key}
            onPress={() => onUpdateRelationship(contact.id, key)}
            style={{
              backgroundColor: contact.relationship === key ? type.color : '#f0f0f0',
              padding: 8,
              marginLeft: 5,
              borderRadius: 6
            }}
          >
            <Text style={{ 
              color: contact.relationship === key ? 'white' : '#666',
              fontSize: 12 
            }}>
              {type.label}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}