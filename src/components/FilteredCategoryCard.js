import React from 'react';
import {View, Pressable, Text, Image} from 'react-native';
import {filtered_card_item} from '../styles/components_style';

function FilteredCategoryCard ({filteredCategory, onClick}) {
    
    return(
        <Pressable 
            style ={filtered_card_item.container}
            onPress = {onClick}>
            <Image
                resizeMode= 'contain'
                source= {{uri: filteredCategory.strMealThumb}}
                style={filtered_card_item.image} />

            <View style={filtered_card_item.footer}>
                <Text style = {filtered_card_item.foodName}>{filteredCategory.strMeal}</Text>
            </View>
        </Pressable>

    );  
}
export {FilteredCategoryCard};