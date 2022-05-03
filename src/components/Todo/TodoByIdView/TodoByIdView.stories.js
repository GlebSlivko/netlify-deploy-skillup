import React from 'react';
import { TodoByIdView } from '../../Todo/TodoByIdView/TodoByIdView';
import { rest } from 'msw';
import { MemoryRouter as Router,Routes, Route } from 'react-router-dom';

const MockTemplate = () => (
  <Router initialEntries={['/2']}>
     <Routes>
          <Route path={`/:todoId`} element={<TodoByIdView />} />     
        </Routes>
  </Router>
);

export default {
    title: 'POSTS/TodoByIdView',
    component: TodoByIdView,   
} 

const Template = (args) => <MockTemplate />;

export const MockedSuccess = Template.bind({});

MockedSuccess.story = {
 parameters: {
   msw: [
     rest.get(`https://jsonplaceholder.typicode.com/todos/2`, (req, res, ctx) => {
       return res(
         ctx.json({
                completed: false,
                id: 2,
                title: "quis ut nam facilis et officia qui",
                userId: 1,
              }),
       );
     }),
   ]
 },
};

export const MockedError = Template.bind({});

MockedError.parameters = {
  msw: [
    rest.get('https://jsonplaceholder.typicode.com/todos/2', (_req, res, ctx) => {
      return res(ctx.delay(800), ctx.status(404));
    }),
  ],
};

export const MockedLoading = Template.bind({});

MockedLoading.parameters = {
  msw: [
    rest.get('https://jsonplaceholder.typicode.com/todos/2', (_req, res, ctx) => {
      return res(
        ctx.delay(2000 * 60 * 60 * 60), 
      );
    }),
  ],
};

