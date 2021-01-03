import React, {useState, useEffect} from 'react';
import {View, Text, FlatList} from 'react-native';
import {CategoryCard} from '../components';

const url_path ='https://www.themealdb.com/api/json/v1/1/categories.php';

function MealCategoryList(props) {
    const [FoodData, setFoodData]= useState({});

    async function fetchData(){
        const response = await axios.get(url_path);
        console.log(response)
        setFoodData(response.data);
    }

    useEffect(()=>{
        fetchData();
    }, [])

    const renderFoodData =(({item})=>{
        <CategoryCard 
            categories={item}
        />
    })
    return(
    <View>
      <FlatList
        data={FoodData}
        keyExtractor={(item)=>item.id.toString()}
        renderItem={renderFoodData}
      />
    </View>

    );
}
export {MealCategoryList};