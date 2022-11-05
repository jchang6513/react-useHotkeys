import React, { useEffect, useMemo, useState } from 'react';
import { Meta, Story } from '@storybook/react';
import useHotkeys from '../src';

const meta: Meta = {
  title: 'Multiple Callbacks',
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
  const [count1, setCount1] = useState(0)
  const [count2, setCount2] = useState(0)
  const [count3, setCount3] = useState(0)
  const [count4, setCount4] = useState(0)

  const callback = useMemo(() => {
    const map = {}
    if (hotkey1) {
      map[hotkey1] = () => setCount1(org => org + 1)
    }
    if (hotkey2) {
      map[hotkey2] = () => setCount2(org => org + 1)
    }
    if (hotkey3) {
      map[hotkey3] = () => setCount3(org => org + 1)
    }
    if (hotkey4) {
      map[hotkey4] = () => setCount4(org => org + 1)
    }

    return map
  }, [hotkey1, hotkey2, hotkey3, hotkey4])

  useHotkeys(key, callback)

  useEffect(() => {
    setCount1(0)
    setCount2(0)
    setCount3(0)
    setCount4(0)
  }, [key])

  return (
    <div>
      <h2>Multiple Callbacks</h2>
      <br />
      <div>Hotkey1: {hotkey1}</div>
      <div>Trigger Count: {count1}</div>
      <br />
      <div>Hotkey2: {hotkey2}</div>
      <div>Trigger Count: {count2}</div>
      <br />
      <div>Hotkey3: {hotkey3}</div>
      <div>Trigger Count: {count3}</div>
      <br />
      <div>Hotkey4: {hotkey4}</div>
      <div>Trigger Count: {count4}</div>
    </div>
  )
};

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const MultipleCallbacks = Template.bind({});

MultipleCallbacks.args = {};
