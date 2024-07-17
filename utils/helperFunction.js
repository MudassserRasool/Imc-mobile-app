import * as Location from 'expo-location';

export async function getLocationUrl() {
  let { status } = await Location.requestForegroundPermissionsAsync();
  if (status !== 'granted') {
    alert('Permission to access location was denied');
    return;
  }

  let location = await Location.getCurrentPositionAsync({});
  let reverseGeocode = await Location.reverseGeocodeAsync(location.coords);
  let address = reverseGeocode[0];
  let url = `http://maps.google.com/maps?q=${location.coords.latitude},${location.coords.longitude}`;

  return { url, address };
}

/*
usage :
import React, { useEffect } from "react";
import { View, Button } from "react-native";
import { getLocationUrl } from "./locationUtils"; // Assuming the utility function is in locationUtils.js

export default function App() {
  const openMap = async () => {
    let url = await getLocationUrl();
    if (url) {
      Linking.openURL(url);
    }
  };

  return (
    <View>
      <Button title="Open in Map" onPress={openMap} />
    </View>
  );
}

*/

export const isValidEmail = (email) => {
  const pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return pattern.test(email);
};

export const formatAddress = (address) => {
  let formattedAddress = '';
  if (address?.name) formattedAddress += `${address?.name}, `;
  if (address?.district) formattedAddress += `${address?.district}, `;
  if (address?.city) formattedAddress += `${address?.city}, `;
  if (address?.region) formattedAddress += `${address?.region}, `;
  if (address?.country) formattedAddress += `${address?.country}`;
  return formattedAddress;
};
