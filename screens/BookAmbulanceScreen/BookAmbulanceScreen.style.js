import { StyleSheet } from 'react-native';
import { themeColors } from '../../theme';

const styles = StyleSheet.create({
  cardBody: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    shadowColor: '#000',
    width: '90%',
    marginHorizontal: '5%',
    marginVertical: 10,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 50,
  },
  mainHeading: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  simpleText: {
    fontSize: 16,
    color: '#7f8c8d',
  },
  simpleHeading: {
    fontSize: 16,
    color: '#7f8c8d',
    fontWeight: 'bold',
  },
  column: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  verticalDivider: {
    height: '100%',
    width: 1,
    backgroundColor: '#7f8c8d',
    marginHorizontal: 10,
  },
  buttonBody: {
    width: '95%',
    backgroundColor: themeColors.bgColor(1),
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 11,
    borderRadius: 50,
    marginHorizontal: '2.5%',
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
  },
});

export default styles;
