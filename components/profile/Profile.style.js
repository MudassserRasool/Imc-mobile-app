import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'space-between',
  },
  section: {
    marginTop: 20,
  },
  sectionInner: {
    display: 'flex',
    flexDirection: 'column',
    gap: 7,
    marginTop: 8,
  },
  itemRow: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 10,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
  title: {
    fontSize: 15,
    width: '80%',
    color: 'white',
  },
  icons: {
    color: 'white',
  },
  editIcon: {
    color: 'orange',
  },
  saveIcon: {
    color: 'green',
  },
  footer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: 12,
  },
  button: {
    alignItems: 'center',
    paddingVertical: 12,
    backgroundColor: '#2D2926', // #2D2926 #01A4CD
    borderRadius: 25,
    width: '80%',
  },
});

export default styles;

export const icons = {
  height: 18,
  width: 18,
};
