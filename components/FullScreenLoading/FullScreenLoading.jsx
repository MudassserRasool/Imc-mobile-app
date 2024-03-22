import React from 'react';
import {
  ActivityIndicator,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { themeColors } from '../../theme';

const FullScreenLoading = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator
        size="large"
        color={themeColors.bgColor(1)}
        style={styles.loader}
      />
      <Text style={styles.loadingText}>Loading...</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: '#F5F5F5',
    paddingTop: StatusBar.currentHeight,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loader: {
    transform: [{ scale: 1.5 }], // Increase the size of the loader
  },
  loadingText: {
    color: themeColors.text,
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
  },
});

export default FullScreenLoading;
