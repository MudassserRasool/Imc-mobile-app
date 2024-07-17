import AsyncStorage from '@react-native-async-storage/async-storage';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import DrawerNavigator from '../components/DrawerNavigation/DrawerNavigation';
import AppointmentScreen from '../screens/AppointmentScreen/AppointmentScreen';
import LoginPage from '../screens/Auth/Login';
import LoginAndRegister from '../screens/Auth/LoginAndRegister/LoginAndRegister';
import RegisterPage from '../screens/Auth/Register';
import BookAmbulanceScreen from '../screens/BookAmbulanceScreen/BookAmbulanceScreen';
import ChatBoot from '../screens/ChatBoot/ChatBoot';
import OrderMedicinesScreen from '../screens/OrderMedicinesScreen/OrderMedicinesScreen';
import { login } from '../slices/authSlice';
const Stack = createNativeStackNavigator();

export default function Navigation() {
  const dispatch = useDispatch();

  useEffect(() => {
    const checkToken = async () => {
      const userEmail = await AsyncStorage.getItem('userEmail');
      const userToken = await AsyncStorage.getItem('userToken');

      if (userEmail && userToken) {
        dispatch(login({ email: userEmail, token: userToken }));
      }
    };

    checkToken();
  }, [dispatch]);

  const token = useSelector((state) => state.auth.token);

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName="DrawerNavigator"
      >
        {token ? (
          <>
            <Stack.Screen name="DrawerNavigator" component={DrawerNavigator} />

            <Stack.Screen
              name="Book Appointment"
              component={AppointmentScreen}
              options={{
                headerShown: true,
                headerBackTitle: 'Custom Back',
                headerBackTitleStyle: { fontSize: 30 },
              }}
            />
            <Stack.Screen
              name="ConsultancyScreen"
              component={ChatBoot}
              options={{
                headerShown: true,
                title: 'Consultancy Chat', // Set the display name here
              }}
            />
            <Stack.Screen
              name="Order Medicines"
              component={OrderMedicinesScreen}
              options={{ headerShown: true }}
            />
            <Stack.Screen
              name="BookAmbulanceScreen"
              component={BookAmbulanceScreen}
              options={{ headerShown: true }}
            />
          </>
        ) : (
          <>
            <Stack.Screen
              name="LoginAndRegister"
              component={LoginAndRegister}
            />
            <Stack.Screen name="Register" component={RegisterPage} />
            <Stack.Screen name="Login">
              {(props) => (
                <LoginPage
                  {...props}
                  onLogin={() => setIsAuthenticated(true)}
                />
              )}
            </Stack.Screen>
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
