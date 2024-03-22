import { useNavigation } from '@react-navigation/native';

import { useState } from 'react';
import {
  Image,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import * as Icon from 'react-native-feather';
import { useDispatch } from 'react-redux';
import FullScreenLoading from '../../components/FullScreenLoading/FullScreenLoading.jsx';
import { url } from '../../config/environment.js';
import { login } from '../../slices/authSlice.js';
import styles, { iconSize, inputIconColor } from './style.js';
function LoginPage({ props }) {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [mainError, setMainError] = useState('');

  const handleSubmit = async () => {
    setLoading(true);
    const userData = {
      email,
      password,
    };

    try {
      const response = await fetch(`${url}/api/customers/loginCustomer`, {
        method: 'POST',
        body: JSON.stringify(userData),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const json = await response.json();

      if (!response.ok) {
        setMainError(json.message);
      } else {
        console.log('you have scuessfully login');
        dispatch(login({ email: userData.email, token: json.token }));
      }
    } catch (error) {
      console.error(
        'catch section An unexpected error occurred:',
        error.message || 'Unknown error'
      );
      setMainError(error.message || 'Unknown error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {loading ? (
        <FullScreenLoading />
      ) : (
        <View style={{ backgroundColor: 'white' }}>
          <ScrollView
            contentContainerStyle={{
              flexGrow: 1,
              justifyContent: 'center',
              height: '100%',
            }}
            keyboardShouldPersistTaps={'always'}
          >
            <View>
              <View style={styles.logoContainer}>
                <Image
                  style={styles.logo}
                  source={require('../../assets//images/bikeGuy.png')}
                />
              </View>
              <View style={styles.loginContainer}>
                <Text style={styles.text_header}>Login !!!</Text>
                <View style={styles.action}>
                  <Icon.User
                    size={20}
                    color={inputIconColor}
                    style={styles.smallIcon}
                    height={iconSize}
                    width={iconSize}
                  />
                  <TextInput
                    placeholder="Mobile or Email"
                    style={styles.textInput}
                    onChange={(e) => setEmail(e.nativeEvent.text)}
                  />
                </View>
                <View style={styles.action}>
                  <Icon.Lock
                    size={20}
                    color={inputIconColor}
                    style={styles.smallIcon}
                    height={iconSize}
                    width={iconSize}
                  />
                  <TextInput
                    placeholder="Password"
                    style={styles.textInput}
                    onChange={(e) => setPassword(e.nativeEvent.text)}
                  />
                </View>
              </View>
              <View style={styles.button}>
                <TouchableOpacity
                  style={styles.inBut}
                  onPress={() => handleSubmit()}
                >
                  <View>
                    <Text style={styles.textSign}>Log in</Text>
                  </View>
                </TouchableOpacity>
              </View>
              <Text style={styles.errorText} className="text-center">
                {mainError}
              </Text>

              <TouchableOpacity onPress={() => navigation.navigate('Register')}>
                <Text
                  style={{
                    color: '#420475',
                    fontWeight: '700',
                    textAlign: 'center',
                  }}
                >
                  Forgot Password? Create new account
                </Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View>
      )}
    </>
  );
}
export default LoginPage;
