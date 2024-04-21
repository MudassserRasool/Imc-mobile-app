import React from 'react';
import { Text, View } from 'react-native';

const ErrorComponent = ({ message, style }) => {
  return (
    <View
      style={[
        { flex: 1, justifyContent: 'center', alignItems: 'center' },
        style,
      ]}
    >
      <Text>Error: {message}</Text>
    </View>
  );
};

export default ErrorComponent;
