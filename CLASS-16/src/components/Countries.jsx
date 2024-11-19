import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';

const Countries = () => {
    
    // const [countries, setCountries] = useState([]);

    // const [loading, setLoading] = useState(true);
    // const [error, setError] = useState(null)

    const fetchCountries = async() =>{
        // const response = await axios.get('https://restcountries.com/v3.1/all')
        // return response.data;
        const { data } = await axios.get('https://restcountries.com/v3.1/all')
        return data;
    }

    const {data: countries, error, isLoading} = useQuery("Countries", fetchCountries)
    // console.log(data);
    
    // useEffect(() => {
    //     const fetchCountries = async () => {
    //         try{
    //             const response = await axios.get('https://restcountries.com/v3.1/all')
    //             // const data = await response.json()
    //             // setCountries(data);
    //             setCountries(response?.data);
    //             setLoading(false)
    //         }catch(e){
    //             setError(e)
    //             console.log(e, "While fetching countries");
    //         }
    //     }

    //     fetchCountries();

    // },[])
    if(isLoading){
        return <h2>Rest Countries are loading</h2>
    }
    
    return (
        
        <div>
             <h2>Total countries: {countries?.length}</h2>
    
             <div className='grid grid-cols-3 gap-10'>
                 {countries && countries.length > 0 && countries?.map((country, index) => {
                    return (
                        <div key={index} className='border p-5'>
                             <img src={country?.flags?.png} className='h-40 object-contain'></img>
                             <h3>{index + 1}. Name: {country?.name?.common}</h3>
                         </div>
                     );
                 })} {/* Corrected this line */}
             </div>
        </div>
    );
}
export default Countries;