import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {Detail, Categories, Meals} from './pages';
import { CategoryHeader } from './pages/categories/components';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
      screenOptions={{
        headerBackground: () => (
          <CategoryHeader />
        ),
        headerTintColor: 'white'
      }}
      >
        <Stack.Screen name="Categories" component={Categories} />
        <Stack.Screen name="Meals" component={Meals} />
        <Stack.Screen name="Detail" component={Detail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;