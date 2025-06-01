import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import ComboBox from '../components/ComboBox';

const commonOptions = [
  { value: 'apple', label: 'Apple' },
  { value: 'banana', label: 'Banana' },
  { value: 'cherry', label: 'Cherry' },
  { value: 'date', label: 'Date' },
  { value: 'elderberry', label: 'Elderberry' },
  { value: 'fig', label: 'Fig' },
  { value: 'grape', label: 'Grape' },
  { value: 'honeydew', label: 'Honeydew' },
];

const meta: Meta<typeof ComboBox> = {
  title: 'Components/ComboBox',
  component: ComboBox,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    options: {
      control: 'object',
      description: 'Array of options for the combobox (value and label)',
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder text for the input',
    },
    label: {
        control: 'text',
        description: 'Label for the combobox',
    },
    onSelect: { 
      action: 'selected',
      description: 'Callback function when an option is selected' 
    },
  },
  args: { 
    onSelect: fn(),
    options: commonOptions,
   },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: 'Select a fruit...',
  },
};

export const WithLabel: Story = {
    args: {
      label: 'Choose your favorite fruit',
      placeholder: 'E.g., Apple',
    },
  };

export const FewOptions: Story = {
  args: {
    options: commonOptions.slice(0, 3),
    placeholder: 'Select a fruit...',
  },
};

export const NoOptions: Story = {
  args: {
    options: [],
    placeholder: 'No fruits available',
  },
};

export const PreFilledSearch: Story = {
    args: {
        placeholder: 'Type to search...',
        // Simulate user typing "ap" by filtering options directly for story
        // In real usage, this would be handled by user input and state
    },
    // You might need to use a play function for more complex initial states if args alone isn't enough
  }; 