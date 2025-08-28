import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';

export default function LaunchScreen() {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/cropclassic.png')}
  style={styles.logo}
  resizeMode="contain"
      />
      <Text style={styles.welcome}>Welcome to the Adventure!</Text>
      <TouchableOpacity style={styles.button} onPress={() => router.replace('/(tabs)/Home')}> 
        <Text style={styles.buttonText}>Continue</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: '80%',
    height: 180,
    marginBottom: 32,
  },
  welcome: {
    fontSize: 22,
    marginBottom: 32,
    color: '#1e293b',
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: '#f31111ff',
    paddingHorizontal: 32,
    paddingVertical: 14,
    borderRadius: 8,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
  },
});
