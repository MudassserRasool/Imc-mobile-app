import * as ImagePicker from 'expo-image-picker';
import React, { useState } from 'react';
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import * as Icon from 'react-native-feather';
import { url } from '../../config/environment';
import styles from './OrderMedicinesScreen.style';
const OrderMedicinesScreen = () => {
  // const [image, setImage] = useState(null);
  const [formData, setFormData] = useState({
    image: null,
    name: '',
    phone: '',
    address: '',
  });

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      // setImage(result.assets[0].uri);
      let assets = result.assets[0];
      let url = assets.uri;
      let nameParts = url.split('/');
      let name = nameParts[nameParts.length - 1];
      let fileType = name.split('.')[1];

      let fileToUpload = {
        name: name,
        uri: url,
        type: `image/${fileType}`,
      };
      setFormData({ ...formData, image: fileToUpload });
    }
  };

  const handleInputChange = (key, value) => {
    setFormData({ ...formData, [key]: value });
  };

  const orderMedicine = async () => {
    // const { name, phone, address, image } = formData;

    // // Validate form data
    // if (!name || !phone || !address) {
    //   alert('Please fill all the fields');
    //   return;
    // }
    let imageFormData = new FormData();

    // Check if an image is selected
    if (formData.image?.uri) {
      let uriParts = formData.image.uri.split('.');
      let fileType = uriParts[uriParts.length - 1];

      imageFormData.append('image', {
        uri: formData.image.uri,
        name: `photo.${fileType}`,
        type: `image/${fileType}`,
      });
    }

    // Always include name data
    imageFormData.append('name', formData?.name);
    imageFormData.append('address', formData?.address);
    imageFormData.append('phone', formData?.phone);

    try {
      // Make the API request
      const response = await fetch(`${url}/api/orders/orderMedicine`, {
        method: 'POST',
        body: imageFormData,
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      if (response.ok) {
        const responseData = await response.json();
        alert('Medicine ordered successfully');
      } else {
        alert('Error ordering medicine');
      }
    } catch (error) {
      alert('Failed to order medicine');
    }
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 20} // Adjust this value as needed
    >
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.mainHeading}>Order Your Medicines</Text>
        <Text style={styles.text}>Fill in your order details</Text>
        <TouchableOpacity style={styles.imagePicker} onPress={pickImage}>
          <Icon.Upload
            style={styles.icons}
            color={'#8B8B8B'}
            height={30}
            width={30}
          />
          <Text style={[styles.text, { fontWeight: 'bold' }]}>
            Upload Prescription
          </Text>
          <Text style={[styles.text, { opacity: 0.5 }]}>
            Max file size: 5MB
          </Text>
        </TouchableOpacity>
        {formData?.image?.uri && (
          <Image
            key={formData.image.uri}
            source={{ uri: formData?.image?.uri }}
            style={styles.image}
          />
        )}
        <Text style={[styles.text, { fontWeight: 'bold' }]}>
          Prescription Details
        </Text>

        <View style={styles.formContainer}>
          <Text style={styles.text}>Patient's Name</Text>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Name"
              value={formData.name}
              onChangeText={(text) => handleInputChange('name', text)}
            />
          </View>
          <Text style={styles.text}>Phone Number</Text>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Phone"
              value={formData.phone}
              onChangeText={(text) => handleInputChange('phone', text)}
            />
          </View>
          <Text style={styles.text}>Home Address</Text>

          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Address"
              value={formData.address}
              onChangeText={(text) => handleInputChange('address', text)}
            />
          </View>
        </View>
      </ScrollView>
      {/* Sticky Bottom Button */}
      <TouchableOpacity style={styles.orderButton} onPress={orderMedicine}>
        <Text style={styles.orderButtonText}>Order Medicine</Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
};

export default OrderMedicinesScreen;
