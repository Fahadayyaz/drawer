import { View, Text, StyleSheet } from 'react-native';

export default function FaqScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>FAQ Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8f9fa',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
});
