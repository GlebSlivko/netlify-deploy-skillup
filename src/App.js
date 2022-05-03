import React,{useState} from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import {  Route, Routes } from 'react-router-dom';

import { ChakraProvider,Box,Grid,theme } from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { TodoByIdView } from './components/Todo/TodoByIdView/TodoByIdView';

import { LoginForm } from './components/LoginForm/LoginForm'

import  TodosViewMobx  from './components/mobx/TodosViewMobx'
import { StoreProvider } from './components/mobx/context';

import { ReduxBoard } from './components/ReduxBoard/ReduxBoard'
import { Provider } from "react-redux";

import  store  from './store'

function App() {
 const [state,setState] = useState(false)

const submit = (value) => {
  console.log(value);
  setState(value);
}

  return (
    <Provider store={store}>
     <LoginForm submit={submit}/>
     {state && <ReduxBoard />}
     
  <StoreProvider>
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">
        <Grid minH="100vh" p={3}>
          <ColorModeSwitcher justifySelf="flex-end" />          
      <Router>
        <Routes>
          <Route path={`/`} element={<div>HOME</div>} />     
          <Route path={`/:todoId`} element={<TodoByIdView />} />     
        </Routes>
      </Router>
        </Grid>
           <TodosViewMobx />
      </Box>
    </ChakraProvider>
  </StoreProvider>
    </Provider>
  );
}

export default App;
