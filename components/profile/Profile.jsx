import { useNavigation } from '@react-navigation/native';
import * as WebBrowser from 'expo-web-browser';
import React, { useEffect } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import * as Icon from 'react-native-feather';
import { useDispatch, useSelector } from 'react-redux';
import { url } from '../../config/environment';
import { logout, setProfile } from '../../slices/authSlice';
import styles, { icons } from './Profile.style';

const Profile = () => {
  const userEmail = useSelector((state) => state.auth.userEmail);
  const userProfile = useSelector((state) => state.auth.profile);
  const { name, email, address, phone } = userProfile || {};
  const navigation = useNavigation();

  const dispatch = useDispatch();
  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await fetch(
          `${url}/api/customers/current/${userEmail}`
        );

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const json = await response.json();
        // console.log(json);
        dispatch(setProfile(json));
        console.log('------------------------------------------');
        console.log(name, email, address, phone);
        console.log('------------------------------------------');
        console.log('scuessfully fetched profile' + json);
      } catch (error) {
        console.error('Error fetching data:', error.message);
      }
    };
    fetchProfile();
  }, [userEmail]);

  const handleLogout = () => {
    dispatch(logout());
  };
  const handleLogin = () => {
    dispatch(logout());
    setTimeout(() => {
      navigation.navigate('Login');
    }, 10);
  };
  const handleRegister = () => {
    dispatch(logout());
    setTimeout(() => {
      navigation.navigate('Register');
    }, 10);
  };
  const openPrivacyPolicy = async () => {
    await WebBrowser.openBrowserAsync(
      'https://www.freeprivacypolicy.com/live/2d6e9279-d587-4fa1-9b9d-38584a20dd48'
    );
  };
  const token = useSelector((state) => state.auth.token);
  console.log(token, typeof token);
  return (
    <View style={styles.container}>
      <View>
        {token === '123' ? null : (
          <>
            <View style={styles.section}>
              <Text style={styles.heading}>Personal Info</Text>
              <View style={styles.sectionInner}>
                <View style={styles.itemRow}>
                  <Icon.User
                    style={styles.icons}
                    height={icons.height}
                    width={icons.width}
                  />
                  <Text style={styles.title}>
                    <Text className="font-bold">User :</Text> {name}
                  </Text>
                  {/* edit icon*/}
                </View>

                <View style={styles.itemRow}>
                  <Icon.Mail
                    style={styles.icons}
                    height={icons.height}
                    width={icons.width}
                  />
                  <Text style={styles.title}>
                    <Text className="font-bold">Email :</Text> {email}
                  </Text>
                </View>
                <View style={styles.itemRow}>
                  <Icon.Home
                    style={styles.icons}
                    height={icons.height}
                    width={icons.width}
                  />
                  <Text style={styles.title}>
                    <Text className="font-bold">Address :</Text> {address}
                  </Text>
                </View>
                <View style={styles.itemRow}>
                  <Icon.Phone
                    style={styles.icons}
                    height={icons.height}
                    width={icons.width}
                  />
                  <Text style={styles.title}>
                    <Text className="font-bold">Phone :</Text> {phone}
                  </Text>
                  {/* {0 ? (
              <Icon.Edit
                style={styles.editIcon}
                height={icons.height}
                width={icons.width}
              />
            ) : (
              <Icon.Save
                style={styles.saveIcon}
                height={icons.height}
                width={icons.width}
              />
            )} */}
                </View>
              </View>
            </View>

            <View style={styles.section}>
              <Text style={styles.heading}>General</Text>
              <View style={styles.sectionInner}>
                <TouchableOpacity style={styles.itemRow} onPress={handleLogout}>
                  <Icon.LogOut
                    style={{ color: 'white' }}
                    height={icons.height}
                    width={icons.width}
                  />
                  <Text style={{ color: 'white' }}>Logout</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={styles.itemRow}
                  onPress={() => navigation.navigate('OrderHistory')}
                >
                  <Icon.ShoppingBag
                    style={{ color: 'green' }}
                    height={icons.height}
                    width={icons.width}
                  />
                  <Text>My Orders</Text>
                </TouchableOpacity>
              </View>
            </View>
          </>
        )}
      </View>

      <View style={styles.footer}>
        {token === '123' ? (
          <>
            <TouchableOpacity
              style={styles.button}
              className=" my-1"
              onPress={handleLogin}
            >
              <Text style={{ color: 'white' }}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              className=" my-1"
              onPress={handleRegister}
            >
              <Text style={{ color: 'white' }}>Register</Text>
            </TouchableOpacity>
          </>
        ) : null}

        <TouchableOpacity
          style={styles.button}
          className=" my-1"
          onPressIn={openPrivacyPolicy}
        >
          <Text style={{ color: 'white' }}>Privacy Policy</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Profile;
