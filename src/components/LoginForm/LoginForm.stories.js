// LoginForm.stories.js|jsx

import React from 'react';

import { within, userEvent } from '@storybook/testing-library';

import { LoginForm } from './LoginForm';
// import { formControlLabelClasses } from '@mui/material';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'Login/LoginForm',
  component: LoginForm 
};

const Template = (args) => <LoginForm {...args} />;

// export const EmptyForm = Template.bind({});

export const FilledFormSuccess = Template.bind({});
export const FilledFormIncorrectPassword = Template.bind({});

FilledFormSuccess.play = async ({ canvasElement }) => {
  // Starts querying the component from its root element
  const canvas = within(canvasElement);

  await userEvent.hover(await within(canvasElement).getByTestId('email'));

  await userEvent.type(canvas.getByTestId('email'), 'email@provider.com', {
    delay: 100,
  }); 
  
  await userEvent.type(canvas.getByTestId('password'), 'a-random-password', {
    delay: 100,
  });

  // See https://storybook.js.org/docs/react/essentials/actions#automatically-matching-args to learn how to setup logging in the Actions panel
  await userEvent.click(canvas.getByRole('button'));
};

FilledFormIncorrectPassword.play = async ({ canvasElement }) => {
  // Starts querying the component from its root element
  const canvas = within(canvasElement);

  await userEvent.hover(await within(canvasElement).getByTestId('email'));

  await userEvent.type(canvas.getByTestId('email'), 'email@provider.com', {
    delay: 100,
  }); 
  
  await userEvent.type(canvas.getByTestId('password'), 'a', {
    delay: 100,
  });

  // See https://storybook.js.org/docs/react/essentials/actions#automatically-matching-args to learn how to setup logging in the Actions panel
  await userEvent.click(canvas.getByRole('button'));
};

