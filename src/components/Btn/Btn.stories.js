import  Btn  from './Btn'
import Center from '../Center/Center'

export default {
    title: 'Form/Btn',
    component: Btn,  
    args:{
      children:'Button'
    } ,
    decorators:[story => <Center>{story()}</Center>] 
  }

  export const Primary = () => <Btn variant='primary'>Primary</Btn>
  export const Secondary = () => <Btn variant='secondary'>Secondary</Btn>
  export const Success = () => <Btn variant='success'>Success</Btn>
  export const Danger = () => <Btn variant='danger'>Danger</Btn>
  
const Template = args => <Btn {...args}/>

export const PrimaryA = Template.bind({})

PrimaryA.args = {
  variant:'primary',
  children:'Primary Args',
}

export const LongPrimaryA = Template.bind({})

LongPrimaryA.args = {
  ...PrimaryA.args,
  children:'Long Primary Args'
}

export const SecondaryA = Template.bind({})

SecondaryA.args = {
  variant:'secondary',
  children:'Secondary Args', 
}