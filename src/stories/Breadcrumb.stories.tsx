import type { Meta, StoryObj } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom'; // Needed because Breadcrumb uses <Link>
import Breadcrumb from '../components/Breadcrumb';

const meta: Meta<typeof Breadcrumb> = {
  title: 'Components/Breadcrumb',
  component: Breadcrumb,
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
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
};

export default meta;

type Story = StoryObj<typeof meta>;

const sampleBreadcrumbItems = [
  { label: 'Home', to: '/' },
  { label: 'Products', to: '/products' },
  { label: 'Category', to: '/products/category' },
  { label: 'Current Item', to: '/products/category/item' },
];

export const Default: Story = {
  args: {
    items: sampleBreadcrumbItems,
  },
};

export const CustomSeparator: Story = {
  args: {
    items: sampleBreadcrumbItems.slice(0, 3),
    separator: '>',
  },
};

export const TwoItems: Story = {
  args: {
    items: sampleBreadcrumbItems.slice(0, 2),
  },
};

export const SingleItem: Story = {
  args: {
    items: [sampleBreadcrumbItems[0]],
  },
}; 