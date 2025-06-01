import type { Meta, StoryObj } from '@storybook/react';
import Carousel from '../components/Carousel';

const meta: Meta<typeof Carousel> = {
  title: 'Components/Carousel',
  component: Carousel,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    items: {
      control: 'object',
      description: 'An array of React nodes to display in the carousel',
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

const sampleItems = [
  <div key="1" className="text-2xl font-bold">Slide 1</div>,
  <div key="2" className="text-2xl font-bold">Slide 2</div>,
  <div key="3" className="text-2xl font-bold">Slide 3</div>,
  <div key="4" className="text-2xl font-bold">Slide 4</div>,
];

export const Default: Story = {
  args: {
    items: sampleItems,
  },
};

export const ThreeItems: Story = {
  args: {
    items: sampleItems.slice(0, 3),
  },
};

export const SingleItem: Story = {
  args: {
    items: [sampleItems[0]],
  },
}; 