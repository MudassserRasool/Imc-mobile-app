import { Image } from 'expo-image';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { useSelector } from 'react-redux';
import { url } from '../../config/environment';
import { currency } from '../../constants';
import usePost from '../../hooks/usePost';
import styles from './AppointmentCard.style';

const AppointmentCard = ({ data }) => {
  const profile = useSelector((state) => state.auth.profile);

  const {
    postData: postRequest,
    isLoading,
    error,
  } = usePost(`${url}/api/customers/postAppointment`);
  const appointmentData = {
    doctor: data?.name,
    name: profile?.name,
    phone: profile?.phone,
  };
  const handlePost = async () => {
    try {
      const response = await postRequest(appointmentData);
      alert('Appointment Booked Successfully');
    } catch (error) {
      alert('Error booking appointment');
    }
  };
  return (
    <View style={styles.cardBody}>
      {/* <View>
        <Text style={styles.heading}>{error}</Text>
      </View> */}
      <View style={styles.row}>
        <Image
          source={{ uri: `${url}/${data?.image}` }}
          style={styles.image}
          alt="doctor image"
        />
        <View>
          <Text style={styles.mainHeading}>{data.name}</Text>
          <Text style={styles.simpleText}>{data.specialization}</Text>
          <Text style={styles.simpleText}>{data.qualification}</Text>
        </View>
      </View>
      <View style={[styles.row, { marginTop: 10 }]}>
        <View style={styles.column}>
          <Text style={styles.simpleHeading}>experience</Text>
          <Text style={styles.simpleText}>{data.experience} year</Text>
        </View>
        <View style={styles.verticalDivider}></View>
        <View style={styles.column}>
          <Text style={styles.simpleHeading}>Fees</Text>
          <Text style={styles.simpleText}>
            {data?.fees}
            {currency}
          </Text>
        </View>
        <View style={styles.verticalDivider}></View>
        <View style={styles.column}>
          <Text style={styles.simpleHeading}>Rating</Text>
          <Text style={styles.simpleText}>{data.rating} star</Text>
        </View>
      </View>
      <View
        style={[styles.row, { marginTop: 15, justifyContent: 'space-around' }]}
      >
        <Text style={styles.simpleHeading}>Availability</Text>
        <Text style={styles.simpleText}>
          {data.days}-days || {data.time}
        </Text>
      </View>
      <TouchableOpacity style={styles.buttonBody} onPress={handlePost}>
        <Text style={styles.buttonText}>Book Appointment</Text>
      </TouchableOpacity>
    </View>
  );
};
export default AppointmentCard;
