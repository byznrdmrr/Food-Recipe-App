import React from 'react';
import {ScrollView, View, Text, Image, Linking} from 'react-native';
import {meal_view} from './styles';
import { YoutubeButton } from './YoutubeButton';

export function DetailView({item}) {
  function goToVideo() {
    Linking.openURL(item.strYoutube)
  }
  return (
    <View style={meal_view.container}>
      <ScrollView style={{flex: 1}}>
        <Image 
        style={meal_view.image} 
        source={{uri: item.strMealThumb}} 
        />
        <Text style={meal_view.title}>{item.strMeal}</Text>
        <Text style={meal_view.description}>"{item.strInstructions}"</Text>
        <YoutubeButton onPress={goToVideo}/>
      </ScrollView>
    </View>
  );
}
