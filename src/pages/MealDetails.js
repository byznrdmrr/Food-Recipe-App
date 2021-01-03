import React, { useEffect, useState } from 'react';
import {View, Text,ImageBackground} from 'react-native';
import {meal_details} from '../styles/pages_style'
import axios from 'axios';
import { WebView } from 'react-native-webview';

const api_url = 'https://www.themealdb.com/api/json/v1/1/lookup.php?i=52772'

function MealDetails({route}) {
    const {id} = route.params;
    const[details, setDetails] = useState({});

    function fetchDetailsData() {
        axios.get('https://www.themealdb.com/api/json/v1/1/lookup.php' + id )
        .then((response)=>setDetails(response.data))       
    }
    useEffect(() =>{
        fetchDetailsData();
    }, [])

    return(
        <View>
            <ImageBackground
                source={{uri: details.strMealThumb}}
                resizeMode= 'contain'
                style={meal_details.image}
            >
                <Text style={meal_details.title}>{details.strMeal}</Text>
            </ImageBackground>
            <Text style ={meal_details.description}>{details.strInstructions}</Text>
            <WebView source={{uri: details.strYoutube}}  />

                    
        </View>
    )
}
export {MealDetails};