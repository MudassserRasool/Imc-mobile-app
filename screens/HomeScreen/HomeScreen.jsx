import { useNavigation } from '@react-navigation/core';
import React from 'react';
import { Linking, TouchableOpacity, View } from 'react-native';
import * as Icon from 'react-native-feather';
import {
  AmbulanceImage,
  MaleDoctorOne,
  MaleDoctorTwo,
  MedicansImage,
} from '../../assets';
import HorizontalHomePageCard from '../../components/HorizontalHomePageCard/HorizontalHomePageCard';
import VerticalHomePageCard from '../../components/VerticalHomePageCard/VerticalHomePageCard';
import { hospitalPhoneNumber } from '../../constants';
import styles from './HomeScreen.style';

const HomeScreen = () => {
  const navigation = useNavigation();
  const callToHospital = () => {
    // const phoneNumber = '+923010773586'; // Replace with the desired phone number
    const url = `tel:${hospitalPhoneNumber}`;

    Linking.openURL(url)
      .then((result) => {
        if (result) {
          alert('Phone call opened successfully');
        } else {
          alert('Phone call could not be opened');
        }
      })
      .catch((error) => {
        alert('Error opening phone call', error);
      });
  };
  return (
    <View style={styles.container}>
      <View style={styles.mainCard}>
        <VerticalHomePageCard
          image={MaleDoctorOne}
          title="Book Appointment"
          navigateScreen="Book Appointment"
        />
        <VerticalHomePageCard
          image={MaleDoctorTwo}
          title="Consult a Doctor"
          navigateScreen="ConsultancyScreen"
        />
        <HorizontalHomePageCard
          Image={MedicansImage}
          title="Book Medicines"
          navigateScreen="Order Medicines"
        />
        <HorizontalHomePageCard
          Image={AmbulanceImage}
          title="Book Ambulance"
          navigateScreen="BookAmbulanceScreen"
        />
      </View>
      <TouchableOpacity style={styles.callButton} onPress={callToHospital}>
        <Icon.Phone color="#fff" />
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;
