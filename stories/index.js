import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

// import Hello from '../src/components/Hello';
// storiesOf('Hello', module)
//   .add('Click', () => <Hello 
//           onClick={action('clicked')} 
//           message='I am Message'/>)

import EditableDiv from '../src/components/shared/EditableDiv';

storiesOf('Shared Component', module)
  .add('EditableDiv', () => {
    const onChange = _v => console.log('updated : ', _v)
    const onUpdate = _v => console.log('UPDATE value to ', _v)
    return <EditableDiv 
            value='I am Message'
            onChange={onChange}
            onUpdate={onUpdate}/>
  })
