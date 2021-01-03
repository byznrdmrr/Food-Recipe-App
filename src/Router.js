import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {MealCategoryList, FilteredCategory, MealDetails} from './pages';

const Stack = createStackNavigator();

function App() {
    return(
    <NavigationContainer>
       <Stack.Navigator 
          screenOptions={{
            headerShown: false,
          }}
          >
           <Stack.Screen name="MealCategoryList" component={MealCategoryList} />    
           <Stack.Screen name="FilteredCategory" component= {FilteredCategory}/>  
           <Stack.Screen name="MealDetails" component= {MealDetails}/> 
       </Stack.Navigator>
    </NavigationContainer>
  );
    
}
export default App;
