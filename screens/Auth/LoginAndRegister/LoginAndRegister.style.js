import { StyleSheet } from 'react-native';
import { themeColors } from '../../../theme';

const styles = StyleSheet.create({
  mainContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    height: '100%',
    gap: 10,
  },
  riderImage: {
    height: 300,
    resizeMode: 'contain',
  },
  button: {
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    marginTop: 10,
    width: '80%',
    backgroundColor: themeColors.bgColor(0.8),
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export { styles };
