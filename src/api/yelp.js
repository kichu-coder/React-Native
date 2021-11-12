import axios from "axios"


export default axios.create({
    baseURL : "https://api.yelp.com/v3/businesses",
    headers  : {
        Authorization : "Bearer TjA8ZwhrJtCe0xiV17OXV0ne4bVsjSgMeuU6A8j7nlJAXnNZSi0FMBUEIOfA_ZoFjMweJpcFXb5IvYWMtKfk3YeYj-_ExspW8CBFVj47sFSUD1VRFOril6mGcgWOYXYx"
    }
});