import React from 'react';
import { expect } from '@storybook/jest';
import {
  within
} from '@storybook/testing-library';

import { Button } from '../Button/Button'

export default {
    title: 'Loading/Button',
    component: Button,
    args:{
      primary: true,
      label: 'Button',
      onClick:()=> alert('CLICK CLACK!'),
    },
    argTypes: {
      onSubmit: { action: true },
      backgroundColor: { control: 'color' }
    },
  };

export const FindBy = (args) => {
    const [isLoading, setIsLoading] = React.useState(true);
    React.useEffect(() => {
      setTimeout(() => setIsLoading(false), 1000);
    }, []);
    return isLoading ? <div>Loading...</div> : <Button {...args} />
  };

FindBy.play = async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await canvas.findByRole('button');
    await expect(true).toBe(true);
  };