import React from "react";
// import Center from '../Center/Center'

export const First = () => {
    return <div>Hello world</div>
}

export default {
    component: First,
    // title: 'Components/First',
    title: 'Hello/World/Components/First-2',
    // decorators:[story => <Center>{story()}</Center>]
    // can contorl position with decorators here ar in preview.js with addDecorator 
};

export const SomeNameYouLike = () => <First/>;
export const AnotherNameYouLike = () => <First/>;
export const SomeOtherNameYouLike = () => <First/>;

// Template approach for using components with different props

// const Template: Story = (args) => <First {...args} />;

// export const SomeNameYouLike = Template.bind({});
// export const AnotherNameYouLike = Template.bind({});
// export const SomeOtherNameYouLike = Template.bind({});