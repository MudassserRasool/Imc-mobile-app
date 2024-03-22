import { useNavigation } from '@react-navigation/core';
import React from 'react';
import { View } from 'react-native';
import {
  AmbulanceImage,
  MaleDoctorOne,
  MaleDoctorTwo,
  MedicansImage,
} from '../../assets';
import HorizontalHomePageCard from '../../components/HorizontalHomePageCard/HorizontalHomePageCard';
import VerticalHomePageCard from '../../components/VerticalHomePageCard/VerticalHomePageCard';
import styles from './HomeScreen.style';

const HomeScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.mainCard}>
        <VerticalHomePageCard
          image={MaleDoctorOne}
          title="Book Appointment"
          navigateScreen="AppointmentScreen"
        />
        <VerticalHomePageCard
          image={MaleDoctorTwo}
          title="Consult a Doctor"
          navigateScreen="ConsultancyScreen"
        />
        <HorizontalHomePageCard
          Image={MedicansImage}
          title="Book Medicines"
          navigateScreen="OrderMedicinesScreen"
        />
        <HorizontalHomePageCard
          Image={AmbulanceImage}
          title="Book Ambulance"
          navigateScreen="BookAmbulanceScreen"
        />
      </View>
    </View>
  );
};

export default HomeScreen;
