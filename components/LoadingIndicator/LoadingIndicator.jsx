import React from 'react';
import { ActivityIndicator, View } from 'react-native';
import { themeColors } from '../../theme';

const LoadingIndicator = ({ style }) => {
  return (
    <View
      style={[
        { flex: 1, justifyContent: 'center', alignItems: 'center' },
        style,
      ]}
    >
      <ActivityIndicator size="large" color={themeColors.bgColor(1)} />
    </View>
  );
};

export default LoadingIndicator;
