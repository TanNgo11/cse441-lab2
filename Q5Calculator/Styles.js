import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'white',
    borderWidth: 1,
    width: 70,
    borderRadius: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 2,
  },
  container: {
    backgroundColor: '#F5F5F5',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  row: {
    flexDirection: 'row',
    margin: 5,
  },
  display: {
    fontSize: 30,
    marginBottom: 10,
    fontWeight: 'bold',
  },
  clear: {
    borderRadius: 50,
    width: '65%',
    height: 50,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  operator: {
    backgroundColor: '#F0F0F0',
    borderWidth: 1,
    width: 70,
    borderRadius: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  operator_text: {
    color: 'orange',
  },
  zero: {
    width: 170,
    height: 50,
    backgroundColor: 'white',
    borderWidth: 1,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 2,
  },
  equal: {
    width: 50,
    height: 50,
    backgroundColor: 'orange',
    borderWidth: 1,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 2,
  },
});

export default styles;
