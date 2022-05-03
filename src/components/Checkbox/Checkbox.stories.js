import React from 'react';

import { Checkbox } from './Checkbox';

export default {
    title:"Components/Checkbox",
    component:Checkbox,
}

export const withLabel = (args) => <Checkbox {...args} />

withLabel.args = { 
    label:'My label',
    isChecked:true,
    id:'MyCheckbox'
}


