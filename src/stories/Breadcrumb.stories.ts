import type { Meta, StoryObj } from '@storybook/react';
import { withRouter } from 'storybook-addon-react-router-v6';
import Breadcrumb from '../components/Breadcrumb';

const meta = {
  title: 'Components/Breadcrumb',
  component: Breadcrumb,
  decorators: [withRouter],
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    items: {
      control: 'object',
      description: 'An array of breadcrumb items (label and to path)',
    },
    separator: {
      control: 'text',
      description: 'Custom separator for breadcrumb items',
    },
  },
} satisfies Meta<typeof Breadcrumb>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    items: [
      { label: 'Home', to: '/' },
      { label: 'Components', to: '/components' },
      { label: 'Breadcrumb', to: '/components/breadcrumb' },
    ],
    separator: '/'
  },
};

export const CustomSeparator: Story = {
  args: {
    items: [
      { label: 'Dashboard', to: '/dashboard' },
      { label: 'Settings', to: '/dashboard/settings' },
      { label: 'Profile', to: '/dashboard/settings/profile' },
    ],
    separator: '>'
  },
};

export const SingleItem: Story = {
  args: {
    items: [
      { label: 'Home', to: '/' },
    ],
  },
};
