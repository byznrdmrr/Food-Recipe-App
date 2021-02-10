import {StyleSheet, Dimensions} from 'react-native';
const deviceSize = Dimensions.get('window');

const category_item = StyleSheet.create({
  container: {
    borderTopLeftRadius: 20,
    borderBottomRightRadius: 20,
    backgroundColor: 'white',
    padding: 5,
    margin: 10,
    elevation: 10,
    flex: 1,
  },
  image: {
    height: deviceSize.height / 3,
    resizeMode: 'contain',
    borderTopLeftRadius: 20,
    borderBottomRightRadius: 20,  
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
  },
  textContainer: {
    backgroundColor: 'tomato',
    borderTopLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  header:{
    flex: 4,
    backgroundColor: 'tomato',
  }
});

export {category_item};
