import type { Meta, StoryObj } from "@storybook/react";
import { VerticalArticleCard } from "../components";

const meta = {
  title: "Common/VerticalArticleCard",
  component: VerticalArticleCard,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  //argTypes: {
  //   backgroundColor: { control: "color" },
  // },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  //args: { onClick: fn() },
} satisfies Meta<typeof VerticalArticleCard>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    postType: "article",
    article: {
      title: "Some awesome article",
      description:
        "Some awesome article.  A bunch of text goes here! Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur.",
      date: "2024/07/01",
      cardImage: "https://picsum.photos/200/200",
      // https://bit.ly/placeholder-img
    },
    // primary: true,
    // label: "Button",
  },
};

export const ShortText: Story = {
  args: {
    postType: "article",
    article: {
      title: "Some awesome article",
      description: "Some short text",
      date: "2024/07/01",
      cardImage: "https://picsum.photos/200/200",
      // https://bit.ly/placeholder-img
    },
    // primary: true,
    // label: "Button",
  },
};
