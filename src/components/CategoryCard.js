import React from 'react';
import {View, Pressable, Text, Image} from 'react-native';
import {card_item_style} from '../styles/components_style';

function CategoryCard ({categories}) {
    return(
        <Pressable>
            <Text> {categories.strCategory}</Text>
        </Pressable>
    );  
}
export {CategoryCard};