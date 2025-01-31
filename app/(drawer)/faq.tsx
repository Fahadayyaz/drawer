import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const FAQ = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const sections = [
    {
      title: '1. What is this app?',
      content: 'This app is designed to help users manage their tasks efficiently.',
    },
    {
      title: '2. How can I reset my password?',
      content: 'You can reset your password by going to Settings and clicking on "Reset Password".',
    },
    {
      title: '3. How do I contact support?',
      content: 'You can contact support by emailing support@example.com.',
    },
  ];

  const handlePress = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <View style={styles.container}>
      {sections.map((section, index) => (
        <View key={index} style={styles.section}>
          <TouchableOpacity onPress={() => handlePress(index)} style={styles.titleContainer}>
            <Text style={styles.title}>{section.title}</Text>
          </TouchableOpacity>
          {expandedIndex === index && (
            <View style={styles.contentContainer}>
              <Text>{section.content}</Text>
            </View>
          )}
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  section: {
    marginBottom: 10,
  },
  titleContainer: {
    backgroundColor: '#f1f1f1',
    padding: 10,
    borderRadius: 5,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
  },
  contentContainer: {
    padding: 10,
    backgroundColor: '#fafafa',
    borderRadius: 5,
  },
});

export default FAQ;
