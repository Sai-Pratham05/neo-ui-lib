import type { Meta, StoryObj } from "@storybook/react";
import Carousel from "../components/Carousel";

const meta = {
  title: "Components/Carousel",
  component: Carousel,
  tags: ["autodocs"],
} satisfies Meta<typeof Carousel>;

export default meta;
type Story = StoryObj<typeof meta>;

const sampleSlides = [
  <div key="1" className="w-full h-full bg-pink-200 flex items-center justify-center">
    <h2 className="text-2xl font-bold">Slide 1</h2>
  </div>,
  <div key="2" className="w-full h-full bg-yellow-200 flex items-center justify-center">
    <h2 className="text-2xl font-bold">Slide 2</h2>
  </div>,
  <div key="3" className="w-full h-full bg-cyan-200 flex items-center justify-center">
    <h2 className="text-2xl font-bold">Slide 3</h2>
  </div>,
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