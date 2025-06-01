import type { Meta, StoryObj } from '@storybook/react';
import ComboBox from '../components/ComboBox';

const meta = {
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
  },
} satisfies Meta<typeof ComboBox>;

export default meta;
type Story = StoryObj<typeof meta>;

const sampleOptions = [
  { value: 'react', label: 'React' },
  { value: 'vue', label: 'Vue' },
  { value: 'angular', label: 'Angular' },
  { value: 'svelte', label: 'Svelte' },
  { value: 'next', label: 'Next.js' },
  { value: 'nuxt', label: 'Nuxt.js' },
];

export const Primary: Story = {
  args: {
    options: sampleOptions,
    placeholder: 'Select a framework...',
    label: 'Framework',
  },
};

export const WithoutLabel: Story = {
  args: {
    options: sampleOptions,
    placeholder: 'Select a framework...',
  },
};

export const CustomPlaceholder: Story = {
  args: {
    options: sampleOptions,
    placeholder: 'Choose your favorite framework...',
    label: 'Framework',
  },
};

export const SingleOption: Story = {
  args: {
    options: [sampleOptions[0]],
    placeholder: 'Select a framework...',
    label: 'Framework',
  },
};

export const NoOptions: Story = {
  args: {
    options: [],
    placeholder: 'No frameworks available',
    label: 'Framework',
  },
};
