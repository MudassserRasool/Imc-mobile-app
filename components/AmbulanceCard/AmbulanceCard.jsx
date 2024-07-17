import React from 'react';
import { Alert, Linking, Text, TouchableOpacity, View } from 'react-native';
import styles from './AmbulanceCard.style';

const AmbulanceCard = ({ data }) => {
  const callAmbulance = (number) => {
    Linking.openURL(`tel:${number}`).catch((err) =>
      Alert.alert('An error occurred', err)
    );
  };
  return (
    <View style={styles.cardBody}>
      <View style={styles.row}>
        <View></View>
        <View style={{ gap: 5 }}>
          <Text style={styles.mainHeading}>Name: {data.name}</Text>
          <Text style={styles.simpleText}>Address: {data.address}</Text>
          <Text style={styles.simpleText}>
            Charges: {data.fare || 'Contact Us'}
          </Text>
        </View>
      </View>

      <TouchableOpacity
        style={styles.buttonBody}
        onPress={() => callAmbulance(data.ambulanceNumber)}
      >
        <Text style={styles.buttonText}>Call Now</Text>
      </TouchableOpacity>
    </View>
  );
};
export default AmbulanceCard;
