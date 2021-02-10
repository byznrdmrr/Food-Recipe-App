import axios from 'axios';
import React, {useState, useEffect} from 'react';
import {SafeAreaView, FlatList} from 'react-native';
import {MEAL_API} from '@env';
import {MealItem} from './components';
import { meal_item } from './components/styles';

export function Meals({route, navigation}) {
  const {categoryName} = route.params;
  const [mealList, setMealList] = useState([]);

  async function fetchData() {
    const {
      data: {meals},
    } = await axios.get(MEAL_API, {
      params: {
        c: categoryName,
      },
    });
    setMealList(meals);
  }
  useEffect(() => {
    fetchData();
  }, []);
  const renderMeal = ({item}) => (
    <MealItem
      item={item}
      onSelect={() => navigation.navigate('Detail', {mealId: item.idMeal})}
    />
  );

  return (
    <SafeAreaView style={meal_item.mainContainer}>
      <FlatList
        data={mealList}
        renderItem={renderMeal}
        keyExtractor={(_, index) => index.toString()}
        numColumns={2}
      />
    </SafeAreaView>
  );
}
