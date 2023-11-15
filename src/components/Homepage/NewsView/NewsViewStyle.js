import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    marginTop: 6,
    shadowOpacity: 0.1,
  },
  newsCard: {
    padding: 12,
    backgroundColor: 'gray-200',
  },
  cardDown: {
    marginTop: 1,
    borderBottomLeftRadius: 19,
    borderBottomRightRadius: 19,
    padding: 12,
  },
  newsImage: {
    width: '100%',
    height: 150,
    borderTopLeftRadius: 19,
    borderTopRightRadius: 19,
    marginBottom: 1,
    borderWidth: 2,
    borderColor: '#000',
  },
  newsPublish: {
    fontSize: 10,
    color: '#ffffff',
    marginBottom: 4,
  },
  newsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 4,
  },
  newsDescription: {
    fontSize: 14,
    marginTop: 5,
    color: '#ffffff',
  },
  button: {
    marginTop: 12,
    backgroundColor: '#ffba02',
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#000000',
    fontWeight: 'bold',
  },
});

export default styles;
