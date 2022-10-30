import React, { useCallback, useEffect, useState } from 'react';
import { Meta, Story } from '@storybook/react';
import useHotkeys from '../src';

const meta: Meta = {
  title: 'useHotkeys',
  argTypes: {
    key: {
      defaultValue: '',
      control: {
        type: 'text',
      },
    },
  },
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story = args => {
  const { key } = args
  const [count, setCount] = useState(0)

  const callback = useCallback(() => {
    setCount(org => org + 1)
  }, [])

  useHotkeys(key, callback)
  
  useEffect(() => {
    setCount(0)
  }, [key])

  return (
    <div>
      <div>Simple hotkeys</div>
      <div>Hotkey: {key}</div>
      <div>Trigger Count: {count}</div>
    </div>

  )
};

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});

Default.args = {};
