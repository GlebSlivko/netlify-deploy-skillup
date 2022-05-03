import axios from 'axios'

export const useTodoById = async (todoId) => {

    const todo = await axios.get(`https://jsonplaceholder.typicode.com/todos/${todoId}`) 

  return todo;
};