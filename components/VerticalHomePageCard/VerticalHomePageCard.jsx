import { useNavigation } from '@react-navigation/core';
import React from 'react';
import { ImageBackground, Text, TouchableOpacity } from 'react-native';
import styles from './VerticalHomePageCard.style';

const VerticalHomePageCard = ({ image, title, navigateScreen }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={styles.card}
      onPress={() => navigation.navigate(navigateScreen)}
    >
      <ImageBackground source={image} style={styles.image}>
        <Text style={styles.cardText}>{title}</Text>
      </ImageBackground>
    </TouchableOpacity>
  );
};

export default VerticalHomePageCard;
