import React , {useEffect , useState} from 'react';
import yelp from  "../api/yelp"

export default () => {

    const [results , setResults] = useState([]);
    const [errormessage , setErrorMessage] = useState('')

    const searchApi = async (searchTerm) => {
        try {
            const response = await yelp.get("/search" , {
                params : {
                limit : 50,
                term : searchTerm,
                location : 'san jose'
            }
           });
           setResults(response.data.businesses);
           setErrorMessage("");
        } catch(err){
            setErrorMessage("Something Went Wrong  !!!")
        }
    }

    useEffect(() => {
        searchApi()
    },[])
    return [searchApi , results , errormessage]
}

