import { ComponentProps } from "react";
import Navbar from "../components/Navbar";
import { Meta, StoryObj } from "@storybook/react";

type storyProps = ComponentProps<typeof Navbar>;

const meta: Meta<storyProps> = {
  component: Navbar,
};

export default meta;

type story = StoryObj<storyProps>;

export const Primary: story = {

};
