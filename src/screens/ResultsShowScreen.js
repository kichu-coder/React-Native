import React, { useEffect , useState } from 'react'
import {View , Text , StyleSheet , Image, FlatList} from "react-native"
import yelp from '../api/yelp'


const ResultsShowScreen = ({navigation}) => {
    const id = navigation.getParam('id');
    const [photos , setPhotos] = useState([]);

    useEffect( async () => {
        const response = await yelp.get(`/${id}`);
        setPhotos(response.data.photos);
    },[])

    if(!photos){
        return null;
    }

    return (
        <View style={{flex :  1}}>
            <FlatList keyExtractor={(photo) =>  photo} data={photos} renderItem={({item}) => (
                <Image  style = {styles.image} source={{uri : item}}/>
            )} />
        </View>
    )
}

const styles = StyleSheet.create({
    image : {
        width : 300,
        height :300,
        borderRadius : 4
    },
})

export default ResultsShowScreen
