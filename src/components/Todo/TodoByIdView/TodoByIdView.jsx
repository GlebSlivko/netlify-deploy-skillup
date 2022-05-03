import { Box } from '@material-ui/core';
import axios from 'axios'
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import {CircularIndeterminate} from '../Loading/Loading'
import { PostView } from '../PostView/PostView';

export const TodoByIdView =  () => {
  const { todoId } = useParams();

  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      setLoading(true)
      const res = await axios.get(`https://jsonplaceholder.typicode.com/todos/${todoId}`); 
      setPost(res);
      console.log("res",res)
    } 
    catch (err) {
      setError(err)
      console.log(err);
    }
    finally{
      setLoading(false)
    }
  }

  useEffect( () => { 
     fetchData();
  }, [todoId]);

  return (
    <Box>     
    {loading && <div><CircularIndeterminate /></div>}
    {post && <PostView variant='h4'>{post.data.title}</PostView>}
    {error && <div>{error.message}</div>}
    </Box>
  );
};