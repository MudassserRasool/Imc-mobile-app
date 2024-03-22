import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const AppointmentScreen = () => {
  return (
    <View style={styles.container}>
      <Text>AppointmentScreen</Text>
      <Text>AppointmentScreen</Text>
      <Text>AppointmentScreen</Text>
      <Text>AppointmentScreen</Text>
    </View>
  );
};

export default AppointmentScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
