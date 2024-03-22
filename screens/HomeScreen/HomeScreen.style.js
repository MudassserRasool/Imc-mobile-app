import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
  mainCard: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
    justifyContent: 'space-between',
  },
  card: {
    width: '45%',
    borderRadius: 10,
    overflow: 'hidden',
  },
  image: {
    resizeMode: 'cover',
    width: '100%',
    height: 250,
    borderRadius: 10,
  },
  cardText: {
    marginTop: 'auto',
    textAlign: 'center',
    fontSize: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    color: '#fff',
  },
});

export default styles;
