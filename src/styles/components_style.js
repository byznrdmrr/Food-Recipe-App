import {StyleSheet, Dimensions} from 'react-native';
const deviceSize= Dimensions.get('window');

const card_item = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: '#bdbdbd',
        margin: 5,
        borderRadius: 10,
        marginVertical: 8,
    },
    image:{
        height:deviceSize.height / 4,
    },
    categoryName: {
        fontWeight: 'bold',
        fontSize: 25,
    },
    footer: {
        backgroundColor: '#e0e0ea',
        padding: 5,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
    }
})

const filtered_card_item = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: '#bdbdbd',
        margin: 5,
        borderRadius: 10,
        marginVertical: 8,
    },
    image:{
        height:deviceSize.height / 4,
    },
    foodName: {
        fontWeight: 'bold',
        fontSize: 25,       
    },
    footer: {
        backgroundColor: '#e0e0ea',
        padding: 5,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
    }

});
const meal_details = StyleSheet.create({

})
export {card_item, filtered_card_item, meal_details};