import React from 'react'
import ChakraButton from './ChakraButton' 
// import { action, actions } from '@storybook/addon-actions'
import { Button } from '@chakra-ui/react'
import { text,boolean } from '@storybook/addon-knobs'

export default {
  title: 'Chakra/Button',
  component: ChakraButton,
  argTypes: { 
    onClick: { action: 'clicked' },
    colorScheme: { control: "text" },
    children: { control: "text" },
 }
}

const Template =  args => <ChakraButton {...args} />

export const Success = Template.bind({})

Success.args = {
  colorScheme: 'red',
  children: 'Success',
  // onClick: action('Click handler'),
  // onActions: actions('onClick','onMouseOver')
}

export const Danger = Template.bind({})

Danger.args = {
  colorScheme: 'blue',
  children: 'Danger',
  // onActions: actions('onClick','onMouseOver')
}

export const Log = () => (
  <Button colorScheme='red' onClick={()=> console.log('Button clicked',process.env.STORYBOOK_THEME)}>
    Log
  </Button>
)

export const Knobs = () => (
  <Button colorScheme='purple' disabled={boolean('Disabled',false)}>
    {text('Label','Button Label')}
  </Button>  
)