import React from "react";
import { TodoByIdView } from '../TodoByIdView/TodoByIdView'
import { CircularIndeterminate } from '../Loading/Loading'

export default {
    component: TodoByIdView,
    title: "Posts/Loading",
    argTypes: {
        color: {
            options: [ 'inherit', 'primary', 'secondary'],
            control: {
                type: 'select'
            }
        },
        size: {type: 'number'},        
    }
};

const LoadingTemplate = (args) =>  <CircularIndeterminate {...args} />

export const Progress = LoadingTemplate.bind({});

Progress.args = {
    color: "primary",
    size:40
};


