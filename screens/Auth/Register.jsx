import { useNavigation } from '@react-navigation/native';
import {
  Image,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import * as Icon from 'react-native-feather';
import styles, {
  checkIconSize,
  iconSize,
  inputIconColor,
  placeholderTextColor,
} from './style';

import { useState } from 'react';
import { useDispatch } from 'react-redux';
import FullScreenLoading from '../../components/FullScreenLoading/FullScreenLoading';
import { url } from '../../config/environment';
import { register } from '../../slices/authSlice';
import { isValidEmail } from '../../utils/helperFunction';

function RegisterPage({ props }) {
  const [email, setEmail] = useState('');
  const [emailVerify, setEmailVerify] = useState(false);
  const [password, setPassword] = useState('');
  const [passwordVerify, setPasswordVerify] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [mainError, setmainError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const handelSubmit = async () => {
    // check if name is empty then return

    // check if email is empty then return
    if (email === '') {
      setmainError('Email is required');
      return;
    }

    // check if password is empty then return
    if (password === '') {
      setmainError('Password is required');
      return;
    }
    setIsLoading(true);
    const userData = {
      email,
      password,
    };
    try {
      const response = await fetch(`${url}/api/customers/registerCustomer`, {
        method: 'POST',
        body: JSON.stringify({ email, password }),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const json = await response.json();

      if (!response.ok) {
        setmainError(json.message);
      } else {
        dispatch(register({ email: json.email, token: json.token }));
        setmainError('Secuessfully Registered');
      }
    } catch (error) {
      setmainError('Network Error');
    } finally {
      setIsLoading(false); // Reset loading state regardless of success or failure
    }
  };

  function handleEmail(e) {
    const emailVar = e.nativeEvent.text;
    setEmail(emailVar);
    setEmailVerify(false);
    if (/^[\w.%+-]+@[\w.-]+\.[a-zA-Z]{2,}$/.test(emailVar)) {
      setEmail(emailVar);
      setEmailVerify(true);
    }
    setEmailVerify(true);
  }
  // create handller for home address
  // function handleAddress(e) {
  //   const addressVar = e.nativeEvent.text;
  //   setaddress(addressVar);
  // }

  function handlePassword(e) {
    const passwordVar = e.nativeEvent.text;
    setPassword(passwordVar);

    if (passwordVar.length >= 6) {
      setPasswordVerify(false);
    } else {
      setPasswordVerify(true);
    }
  }

  return (
    <>
      {isLoading ? (
        <FullScreenLoading />
      ) : (
        <ScrollView
          contentContainerStyle={{
            flexGrow: 1,
            justifyContent: 'center',
            height: '100%',
          }}
          style={{ backgroundColor: 'white' }}
        >
          <View>
            <View style={styles.logoContainer}>
              <Image
                style={styles.logo}
                source={require('../../assets/images/bikeGuy.png')}
              />
            </View>
            <View style={styles.loginContainer}>
              <Text style={styles.text_header}>Register!!!</Text>

              <View style={styles.action}>
                <Icon.Mail
                  color={inputIconColor}
                  style={styles.smallIcon}
                  height={iconSize}
                  width={iconSize}
                />

                <TextInput
                  placeholder="Email"
                  style={styles.textInput}
                  placeholderTextColor={placeholderTextColor}
                  onChange={(e) => handleEmail(e)}
                />
                {isValidEmail(email) ? (
                  <Icon.CheckCircle
                    color="green"
                    height={checkIconSize}
                    width={checkIconSize}
                  />
                ) : null}
              </View>
              {email.length < 1 ? null : emailVerify ? null : (
                <Text
                  style={{
                    marginLeft: 20,
                    color: 'red',
                  }}
                >
                  Enter Proper Email Address
                </Text>
              )}

              <View style={styles.action}>
                <Icon.Lock
                  color={inputIconColor}
                  style={styles.smallIcon}
                  height={iconSize}
                  width={iconSize}
                />
                <TextInput
                  placeholder="Password"
                  style={styles.textInput}
                  placeholderTextColor={placeholderTextColor}
                  onChange={(e) => handlePassword(e)}
                  secureTextEntry={showPassword}
                />
                <TouchableOpacity
                  onPress={() => setShowPassword(!showPassword)}
                >
                  {!showPassword ? (
                    <Icon.Eye
                      color={'black'}
                      height={checkIconSize}
                      width={checkIconSize}
                    />
                  ) : (
                    <Icon.EyeOff
                      color={'green'}
                      height={checkIconSize}
                      width={checkIconSize}
                    />
                  )}
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.button}>
              <TouchableOpacity
                style={styles.inBut}
                onPress={() => handelSubmit()}
              >
                <View>
                  <Text style={styles.textSign}>Register</Text>
                </View>
              </TouchableOpacity>
            </View>
            <Text style={styles.errorText} className="text-center">
              {mainError}
            </Text>
            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
              <Text
                style={{
                  color: '#420475',
                  fontWeight: '700',
                  textAlign: 'center',
                }}
              >
                Already registered? Login here
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      )}
    </>
  );
}
export default RegisterPage;
