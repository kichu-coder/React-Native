import React from 'react'
import {View , Text , StyleSheet , TouchableOpacity} from "react-native"
import { FlatList } from 'react-native-gesture-handler'
import ResultsDetail from './ResultsDetail'
import { withNavigation } from 'react-navigation'

const ResultsList = ({title , results , navigation}) => {
    if(!results.length){
        return null;
    }
    return (
        <View style={styles.container}>
           <Text style={styles.title}>{title}</Text> 
           <FlatList keyExtractor={(result) => result.id} horizontal={true}
            showsHorizontalScrollIndicator = {false}
            data={results} 
           renderItem={({item}) => (
               <TouchableOpacity onPress={() => navigation.navigate("ResultsScreen" , {id : item.id})}>
               <ResultsDetail result={item}/>
               </TouchableOpacity>
           )}/>
        </View>
    )
}

const styles = StyleSheet.create({
    title : {
        fontSize : 18,
        fontWeight : 'bold',
        marginLeft : 15,
        marginBottom : 5
    },
    container : {
        marginBottom : 15
    }
})

export default  withNavigation(ResultsList);
