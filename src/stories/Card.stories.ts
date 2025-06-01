import type { Meta, StoryObj } from "@storybook/react";
import { withRouter } from "storybook-addon-react-router-v6";
import Card from "../components/Card";
import SampleImage from "../assets/neo-brutalism-image1.webp";

const meta = {
  title: "Components/Card",
  component: Card,
  decorators: [withRouter],
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    thumbnail: SampleImage,
    date: "March 20th, 2025",
    title: "Neo-ui-lib",
    description:
      "Neo-ui-lib is an aesthetic characterized by high contrast elements, bright colors, and bold shapes. It is often used to make a statement, as it is meant to be eye-catching and stand out to the viewer. It is also used in user interface and web design, with features such as vibrant colors and bold shapes. Neo-ui-lib can also be used in print design, with an example being a bold shape with a vibrant color fill applied to it.",
    callToActionText: "Get Started",
    calllToActionLink: "/overview",
  },
};
