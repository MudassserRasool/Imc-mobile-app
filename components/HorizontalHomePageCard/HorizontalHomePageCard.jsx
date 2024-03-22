import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { ImageBackground, Text, TouchableOpacity } from 'react-native';
import styles from './HorizontalHomePageCard.style';

const HorizontalHomePageCard = ({ Image, title, navigateScreen }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={styles.cardBody}
      onPress={() => navigation.navigate(navigateScreen)}
    >
      <ImageBackground source={Image} style={styles.image}>
        <Text style={styles.cardText}>{title}</Text>
      </ImageBackground>
    </TouchableOpacity>
  );
};

export default HorizontalHomePageCard;
