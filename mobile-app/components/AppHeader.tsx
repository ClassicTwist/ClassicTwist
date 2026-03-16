import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const logo = require('@/assets/cropclassic.png');

type AppHeaderProps = {
  title: string;
  onMenuPress: () => void;
  onLogoPress?: () => void;
};

export default function AppHeader({ title, onMenuPress, onLogoPress }: AppHeaderProps) {
  return (
    <View style={styles.header}>
      <TouchableOpacity style={styles.hamburger} onPress={onMenuPress} hitSlop={10}>
        <View style={styles.bar} />
        <View style={styles.bar} />
        <View style={styles.bar} />
      </TouchableOpacity>

      <TouchableOpacity style={styles.titleWrapper} onPress={onLogoPress} activeOpacity={0.7}>
        <Image source={logo} style={styles.logo} resizeMode="contain" />
        <Text style={styles.headerText}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#111',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 14,
    paddingHorizontal: 16,
    position: 'relative',
  },
  titleWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  headerText: {
    color: '#fff',
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginLeft: 10,
  },
  hamburger: {
    position: 'absolute',
    left: 16,
    top: 14,
    width: 36,
    height: 36,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 2,
  },
  bar: {
    width: 28,
    height: 4,
    backgroundColor: '#fff',
    marginVertical: 2,
    borderRadius: 2,
  },
  logo: {
    width: 34,
    height: 34,
    borderRadius: 8,
    backgroundColor: '#fff',
  },
});
