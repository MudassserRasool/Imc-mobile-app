import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { useDispatch } from 'react-redux';
import { login } from '../../../slices/authSlice';
import { styles } from './LoginAndRegister.style';

const LoginAndRegister = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const handelLoginAsGuest = () => {
    dispatch(login({ email: '123email', token: '123' }));
  };

  return (
    <View style={styles.mainContainer}>
      <Image
        source={require('../../../assets/images/bikeGuy.png')}
        style={styles.riderImage}
      />
      <Text>Find Doctor & Get Appointment</Text>
      <View style={{ marginTop: 40 }}></View>
      <TouchableOpacity
        onPress={() => navigation.navigate('Login')}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('Register')}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Register</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => handelLoginAsGuest()}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Login as a guest</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginAndRegister;
