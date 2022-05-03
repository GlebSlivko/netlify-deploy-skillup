import React from 'react';
import  TodosViewMobx from '../mobx/TodosViewMobx';
import { StoreContext } from './context';
import { Todo } from './storages/todo-store';

const store = {todoStore : new Todo()}

export default {
    title: 'POSTS/TodosViewMobx',
    component: TodosViewMobx,   
    decorators:[(storyFn) => {
      return  <StoreContext.Provider value={store}>{storyFn()}</StoreContext.Provider>
  }]
} 

const Template = () => <TodosViewMobx />;

export const TodosMobx = Template.bind({});




