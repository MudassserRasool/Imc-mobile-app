import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  cardBody: {
    width: '100%',
    borderRadius: 10,
    overflow: 'hidden',
  },
  image: {
    resizeMode: 'cover',
    width: '100%',
    height: 100,
    borderRadius: 10,
  },
  cardText: {
    marginTop: 'auto',
    textAlign: 'center',
    fontSize: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    color: '#fff',
  },
});

export default styles;
