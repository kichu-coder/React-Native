import React , {useState , useEffect} from 'react'
import {View , Text , StyleSheet , ScrollView} from "react-native"
import SearchBar from '../components/SearchBar'
import yelp from "../api/yelp"
import useResults from '../hooks/useResults'
import ResultsList from '../components/ResultsList'

const SearchScreen = ({navigation}) => {
    
    const [term, setTerm] = useState('');
    const [searchApi , results , errormessage] = useResults();
    if(!results.length){
        return null;
    }
    const filterByPrice = (price) => {
        return results.filter(result  => result.price === price)
    }
    return (
        <>
            <SearchBar term={term} onTermChange={setTerm}
            onTermSubmit={() => searchApi(term)}/>
            {errormessage ? <Text>{errormessage}</Text> :  null}
            {results.length >  0 ? <Text style={styles.resultNo}>We have Found {results.length} results</Text> : null}
            <ScrollView>
            <ResultsList results= {filterByPrice("$")} title="Cost Effective" />
            <ResultsList results= {filterByPrice("$$")} title="Bit Pricier" />
            <ResultsList results= {filterByPrice("$$$$")} title="Big Spender!" />
            </ScrollView>
        </>
    )
}

const styles = StyleSheet.create({
    resultNo : {
        alignSelf : 'center'
    }
})

export default SearchScreen
