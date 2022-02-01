import React from 'react';
import '../App.css';

// import components
import { Toggle, Text } from '@geist-ui/react';

interface DisplayToggleProps {
    toggleHandler: (toggled: boolean) => void
}

const DisplayToggle = (props: DisplayToggleProps) => {
  let { toggleHandler } = props;
  return (
    <div className='toggleContainer'>
      <Text p>Show Completed</Text>
      <Toggle onChange={(e) => toggleHandler(e.target.checked)} />
    </div>
  );
};

export default DisplayToggle;