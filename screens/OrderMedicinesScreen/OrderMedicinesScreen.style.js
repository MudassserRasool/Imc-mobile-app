import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    margin: 15,
    flex: 1,
  },
  scrollContainer: {
    flexGrow: 1,
    // justifyContent: 'space-between',
  },
  mainHeading: {
    fontSize: 20,
    fontWeight: 'bold',
    padding: 3,
  },
  text: {
    fontSize: 16,
    padding: 3,
  },
  imagePicker: {
    width: '100%',
    height: 120,
    backgroundColor: 'white',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  image: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
  },
  formContainer: {
    marginTop: 10,
    backgroundColor: 'white',
    padding: 10,
  },
  inputContainer: {
    borderWidth: 1,
    borderColor: 'lightgrey',
    borderRadius: 9,
    padding: 10,
    marginTop: 8,
  },
  orderButton: {
    backgroundColor: '#007BFF',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    width: '100%',
    bottom: 50,
  },
  orderButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default styles;
