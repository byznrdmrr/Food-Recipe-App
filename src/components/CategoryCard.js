import React from 'react';
import {View, Pressable, Text, Image} from 'react-native';
import {card_item} from '../styles/components_style';

function CategoryCard ({categories, onClick}) {
    return(
        <Pressable 
            style ={card_item.container}
            onPress = {onClick}>
            <Image
                resizeMode= 'contain'
                source= {{uri: categories.strCategoryThumb}}
                style={card_item.image} />

            <View style={card_item.footer}>
                <Text style = {card_item.categoryName}>{categories.strCategory}</Text>
            </View>
        </Pressable>

    );  
}
export {CategoryCard};