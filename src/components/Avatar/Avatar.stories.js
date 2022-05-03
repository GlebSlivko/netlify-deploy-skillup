// import React from 'react';

// import { AvatarWrapper } from './Avatar';

// export default {
//   title: 'Design System/Avatar',
//   component: AvatarWrapper,
//   /*
//    * More on Storybook argTypes at:
//    * https://storybook.js.org/docs/react/api/argtypes
//    */
//   argTypes: {
//     size: {
//       control: {
//         type: 'select',
//       },
//       options: ['tiny', 'small', 'medium', 'large'],
//     },
//   },
// };

// // Other Avatar stories

// /*
//  * New story using Controls
//  * Read more about Storybook templates at:
//  * https://storybook.js.org/docs/react/writing-stories/introduction#using-args
//  */
// const Template = args => <Avatar {...args} />;

// export const Controls = Template.bind({});
// /*
//  * More on args at:
//  * https://storybook.js.org/docs/react/writing-stories/args
//  */
// Controls.args = {
// //   loading: false,
//   size: 'tiny',
//   username: 'Dominic Nguyen',
//   src: 'https://avatars2.githubusercontent.com/u/263385',
// };