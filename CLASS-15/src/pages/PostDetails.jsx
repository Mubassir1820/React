import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const PostDetails = () => {

    const [post, setPost] = useState(null);

    const {id} = useParams();

    useEffect(()=> {
        const fetchPost = async () => {
            try{
                const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
                const result = await response.json();
                setPost(result);
            }catch(error){
                console.log(error)
            }
        }
        fetchPost();
    },[]);


    return (
        <div>
           {
             <div className='border mx-10 mb-1 border-black p-2 cursor-pointer'>
           
                <h3>id: {post?.id}</h3>
                <h3>userId: {post?.userId}</h3>
                <h3>title: {post?.title}</h3>
                <h3>body: {post?.body}</h3>
                </div>
            }
        </div>
    );
};

export default PostDetails;