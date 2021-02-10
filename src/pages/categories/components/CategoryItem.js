import React from 'react';
import {TouchableOpacity, Text, Image, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {category_item} from './styles';

export function CategoryItem({item, onSelect}) {
  return (
    <TouchableOpacity style={category_item.container} onPress={onSelect}>
      <Image
        style={category_item.image}
        source={{uri: item.strCategoryThumb}}
      />
      <View style={category_item.textContainer}>
        <Text style={category_item.text}>{item.strCategory}</Text>
      </View>
    </TouchableOpacity>
  );
}
