import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Persons = () => {

    const [Posts, setPosts] = useState([])

    useEffect(()=> {
        const fetchPosts = async () => {
            try{
                const response = await fetch('https://jsonplaceholder.typicode.com/posts')
                const result = await response.json();
                setPosts(result);
            }catch(error){
                console.log(error)
            }
        }
        fetchPosts();
    },[]);


    return (
        <div>
           {
            Posts.map((person, index )=> <Link to={`/post-details/${person?.id}`}  key={person?.id}>
            
            <h3 className='border mx-10 mb-1 border-black p-2 cursor-pointer'>{index + 1}. {person.title}</h3>
            
            
            </Link>)
           }
        </div>
    );
};

export default Persons;