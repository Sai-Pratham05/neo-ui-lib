import type { Meta, StoryObj } from "@storybook/react";
import React from 'react';
import Carousel from "../components/Carousel";

const meta = {
  title: "Components/Carousel",
  component: Carousel,
  tags: ["autodocs"],
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Carousel>;

export default meta;
type Story = StoryObj<typeof meta>;

const sampleSlides = [
  React.createElement('div', {
    key: '1',
    className: 'w-full h-full bg-pink-200 flex items-center justify-center',
    children: React.createElement('h2', {
      className: 'text-2xl font-bold',
      children: 'Slide 1'
    })
  }),
  React.createElement('div', {
    key: '2',
    className: 'w-full h-full bg-yellow-200 flex items-center justify-center',
    children: React.createElement('h2', {
      className: 'text-2xl font-bold',
      children: 'Slide 2'
    })
  }),
  React.createElement('div', {
    key: '3',
    className: 'w-full h-full bg-cyan-200 flex items-center justify-center',
    children: React.createElement('h2', {
      className: 'text-2xl font-bold',
      children: 'Slide 3'
    })
  })
];

export const Primary: Story = {
  args: {
    items: sampleSlides,
  },
};

export const SingleSlide: Story = {
  args: {
    items: [sampleSlides[0]],
  },
};

export const TwoSlides: Story = {
  args: {
    items: [sampleSlides[0], sampleSlides[1]],
  },
}; 