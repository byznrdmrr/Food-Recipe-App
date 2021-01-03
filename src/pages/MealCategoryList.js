import React, {useState, useEffect} from 'react';
import {View, Text, FlatList} from 'react-native';
import {CategoryCard} from '../components';
import axios from 'axios';
import { main } from '../styles/pages_style';

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
            onClick={()=> props.navigation.navigate('FilteredCategory', {category: item.strCategory})}
        />
    );
    
    return(
    <View style={main.container}>
      <FlatList
        data={CategoryList}
        keyExtractor={(item)=>item.idCategory.toString()}
        renderItem={renderCategoryList}
      />
    </View>
    );
}
export {MealCategoryList};