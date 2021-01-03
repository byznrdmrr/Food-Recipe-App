import {StyleSheet, Dimensions} from 'react-native';
const deviceSize = Dimensions.get('window');

const main = StyleSheet.create({
    container: {
        flex: 1,
    },
}),
const meal_details = StyleSheet.create({
    container: {
        flex: 1,
    },

    image: {
        height : deviceSize.height /3,  
        borderBottomWidth: 1,
        borderColor: '#e0e0e0',
        justifyContent: 'center',
    },
    title: {
        fontWeight: 'bold',
        fontSize: 15,
    },
    description :{
        textAlign: 'center'
    }


})


export {main,meal_details};