import {StyleSheet, Dimensions} from 'react-native';
const deviceSize = Dimensions.get('window');

const meal_item = StyleSheet.create({
  mainContainer: {
    flex: 1
  },
  container: {
    borderTopLeftRadius: 20,
    borderBottomRightRadius: 20,
    backgroundColor: 'white',
    padding: 5,
    margin: 5,
    elevation: 10,
    flex: 1,
    elevation: 10,
  },
  image: {
    height: deviceSize.height * 0.3,
    resizeMode: 'contain',
    borderTopLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  text: {
    marginVertical: 3,
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'black',
  },
  textContainer: {
    // backgroundColor: 'tomato',
    borderTopLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  header:{
    flex: 4,
    backgroundColor: 'tomato',
  },
});

export {meal_item};
