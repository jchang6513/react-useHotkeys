import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { Meta, Story } from '@storybook/react';
import useHotkeys from '../src';

const meta: Meta = {
  title: 'Multiple Hotkeys',
  argTypes: {
    hotkey1: {
      defaultValue: '',
      control: {
        type: 'text',
      },
    },
    hotkey2: {
      defaultValue: '',
      control: {
        type: 'text',
      },
    },
    hotkey3: {
      defaultValue: '',
      control: {
        type: 'text',
      },
    },
    hotkey4: {
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
  const { hotkey1, hotkey2, hotkey3, hotkey4 } = args
  const key = useMemo(
    () => [hotkey1, hotkey2, hotkey3, hotkey4].filter(Boolean),
    [hotkey1, hotkey2, hotkey3, hotkey4],
  )

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
      <h2>Multiple Hotkeys</h2>
      <br />
      <div>Hotkeys: {key.join(', ')}</div>
      <div>Trigger Count: {count}</div>
    </div>

  )
};

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const MultipleHotkeys = Template.bind({});

MultipleHotkeys.args = {};
