import React, {useState, useEffect} from 'react';
import {View, Text, FlatList} from 'react-native';
import {CategoryCard} from '../components';
import axios from 'axios';

const url_path ='https://www.themealdb.com/api/json/v1/1/categories.php';

function MealCategoryList(props) {
    const [CategoryList, setCategoryList]= useState({});

    async function fetchData(){
        const response = await axios.get(url_path);
        //console.log(response);
        setCategoryList(response.data);
    }

    useEffect(()=>{
        fetchData();
    }, [])

    const renderCategoryList = ({item}) => (
        <CategoryCard 
            categories={item}
            onClick={()=> props.navigation.navigate('FilteredCategory', {selectedData: item})}
        />
    );
    
    return(
    <View>
      <FlatList
        data={CategoryList}
        keyExtractor={(item)=>item.idCategory.toString()}
        renderItem={renderCategoryList}
      />
      <Text>deneme</Text>
    </View>
    );
}
export {MealCategoryList};