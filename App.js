import { StatusBar } from 'expo-status-bar';
import 'react-native-gesture-handler';
import {
  MD3LightTheme as DefaultTheme,
  PaperProvider,
} from 'react-native-paper';
import Navigation from './Navigation/Navigation';

import { Provider } from 'react-redux';
import { store } from './store';
export default function App() {
  const theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      primary: 'black',
      secondary: 'yellow',
    },
  };
  return (
    <Provider store={store}>
      <PaperProvider theme={theme}>
        <Navigation />
        <StatusBar hidden />
      </PaperProvider>
    </Provider>
  );
}
// eas build -p android --profile preview
