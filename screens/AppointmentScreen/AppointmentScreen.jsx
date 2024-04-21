import React from 'react';
import { FlatList, View } from 'react-native'; // Import FlatList and ActivityIndicator
import AppointmentCard from '../../components/AppointmentCard/AppointmentCard';
import ErrorComponent from '../../components/ErrorComponent/ErrorComponent';
import LoadingIndicator from '../../components/LoadingIndicator/LoadingIndicator';
import { url } from '../../config/environment';
import useFetch from '../../hooks/useFetch';
import styles from './AppointmentScreen.style';

const AppointmentScreen = () => {
  const { data, isLoading, error, refetch } = useFetch(
    `${url}/api/doctor/getAllDoctors/`
  );

  if (isLoading) {
    return <LoadingIndicator />;
  }

  if (error) {
    return <ErrorComponent />;
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={(item) => item._id.toString()}
        renderItem={({ item }) => <AppointmentCard data={item} />}
        maxToRenderPerBatch={5}
      />
    </View>
  );
};

export default AppointmentScreen;
