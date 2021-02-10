import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {SafeAreaView, View, Text} from 'react-native';
import {DetailView} from './components';
import {DETAIL_API} from '@env';

export function Detail({route}) {
  const [meal, setMeal] = useState({});
  const {mealId} = route.params;

  async function fetchData() {
    const {
      data: {meals},
    } = await axios.get(DETAIL_API, {
      params: {
        i: mealId,
      },
    });
    setMeal(meals[0]);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <SafeAreaView style={{flex: 1}}>
      <DetailView item={meal} />
    </SafeAreaView>
  );
}