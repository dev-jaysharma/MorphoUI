import { ComponentProps } from "react";
import Button from "../components/Button";
import { Meta, StoryObj } from "@storybook/react";

type storyProps = ComponentProps<typeof Button>;

const meta: Meta<storyProps> = {
  component: Button,
};

export default meta;

type story = StoryObj<storyProps>;

export const Primary: story = {
  args: {
    children: "Button",
    classname: "",
    darkMode: false,
    size: "lg",
  },
};
