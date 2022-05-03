
import {  createContext,useContext } from 'react';
import { Todo } from '../storages/todo-store';

export const StoreContext = createContext(Todo);

export const StoreProvider = ({ children }) => {

    const stores = {todoStore : new Todo()}

  return <StoreContext.Provider value={stores}>{children}</StoreContext.Provider>;
  };



  export const useStore = () => useContext(StoreContext);
