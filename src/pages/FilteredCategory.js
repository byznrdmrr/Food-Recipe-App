import React, {useEffect, useState} from  'react';
import {View, Text, ImageBackground} from 'react-native';
import axios from 'axios';
import {FilteredCategoryCard } from "../components";


const url_api = 'https://www.themealdb.com/api/json/v1/1/filter.php'

function FilteredCategory({route}) {
    const {category} = route.params;
    const [FilteredCategory, setFilteredCategory] = useState({});

     function fetchFilteredData() {
        const response = axios.get(url_api, {
            params: {
                c: category
        }
        }).then((response) => setFilteredCategory(response.data));
        //console.log(response);
        
    }
    useEffect(()=> {
        fetchFilteredData();
    }, []);

    const renderFilteredCategoryList = ({item}) => (
        <FilteredCategoryCard  
            filteredCategory={item}
            onClick = {() => useLinkProps.navigation.navigate('MealDetails', {id: item.idMeal})}
        />    
    );

    return(
    <View >
      <FlatList
        data={FilteredCategory}
        keyExtractor={(item)=>item.idMeal.toString()}
        renderItem={renderFilteredCategoryList}
      />
    </View>
    )
}
export {FilteredCategory};
