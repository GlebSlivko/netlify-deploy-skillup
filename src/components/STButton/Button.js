import React from 'react';

import Btn from '../Btn/Btn'

import styled from 'styled-components';

// When the user clicks a button, it will trigger the `action()`,
// ultimately showing up in Storybook's addon panel.
function ButtonWrapper(props) {
  return <Btn {...props} />;
}

export const buttonWrapper = (args) => <Btn {...args}/>
